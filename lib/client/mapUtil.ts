export interface RoadObj {
  coordinates: any[];
  uid: number;
}

export const setInitPostition = (
  map: any,
  longitude: number | undefined,
  latitude: number | undefined
) => {
  if (longitude && latitude) {
    const initPos = new naver.maps.LatLng(longitude, latitude);
    map.setCenter(initPos);
  }
};
export const setInitZoom = (map: any, zoom: number | undefined) => {
  if (zoom) {
    map.setZoom(zoom, true);
  }
};

const onclickRoad = async (uid: number, map: any) => {
  console.log("on click road: " + uid);
  // http://bluesignal.iptime.org:48080/v2/road/ri/295"
  fetch(`http://bluesignal.iptime.org:48080/v2/road/ri/${uid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify({ password: password }),
  })
    .then(async (res) => {
      try {
        const { data } = await res.json();
        console.log(data);

        //#region 경도, 위도 배열로부터 문자열 만들기
        let locations: string[] = [];
        data.coordinates.map((coordinate: number[]) => {
          locations.push("(" + coordinate.join(",") + ")");
        });
        const location: string = locations.join("<br />");
        //#endregion

        //#region 설비 배열로부터 문자열 만들기
        let facilityList: string[] = [];
        data.facility_info.map((item: { name: string; num: number }) => {
          facilityList.push(item.name + " " + item.num);
        });
        const facility: string = facilityList.join("<br />");
        //#endregion

        //#region 기타 장애물 배열로부터 문자열 만들기
        let etcObstacleList: string[] = [];
        data.etc_obstacle.map((item: { name: string; num: number }) => {
          etcObstacleList.push(item.name + " " + item.num);
        });
        const etcObstacle: string = etcObstacleList.join("<br />");
        //#endregion

        const roadInfoContent = `
      <div>
        기본정보
        <table border="1">
          <tr>
            <td>도로코드</td>
            <td>${data.uid}</td>
          </tr><tr>
            <td>경도,위도</td>
            <td>${location}</td>
          </tr>
        </table>
        도로정보
        <table border="1">
          <tr>
            <td>경사도</td>
            <td>${data.stats_data.slope_degree.type}</td>
          </tr><tr>
            <td>보행로</td>
            <td>${data.stats_data.side_walk.type}</td>
          </tr><tr>
            <td>안전</td>
            <td>${data.stats_data.safety.type}</td>
          </tr><tr>
            <td>환경</td>
            <td>${data.stats_data.environment.type}</td>
          </tr>
        </table>
        장애물정보
        <table border="1">
          <tr>
            <td>설비</td>
            <td>${facility}</td>
          </tr><tr>
            <td>비고정 장애물</td>
            <td></td>
          </tr><tr>
            <td>기타 장애물</td>
            <td>${etcObstacle}</td>
          </tr>
        </table>
        <div>위험예측: ${data.risk}</div>
      </div>
      `;

        const infoWindow = new naver.maps.InfoWindow({
          content:
            "도로 코드 12312312<br />" +
            "위치 서울특별시 마포구 도로명 1<br />",
          //maxWidth: 140,
          //backgroundColor: "#eee",
          //borderColor: "#2db400",
          //borderWidth: 5,
          anchorSize: new naver.maps.Size(0, 0), //new naver.maps.Size(30, 30),
          anchorSkew: true,
          //anchorColor: "#eee",
          //pixelOffset: new naver.maps.Point(20, -20),
        });
        infoWindow.setContent(roadInfoContent);
        infoWindow.open(
          map,
          new naver.maps.LatLng(data.coordinates[0][1], data.coordinates[0][0])
        );
      } catch (err) {}
    })
    .catch((error) => {
      console.log(error);
    });
};

export const generateRoadPath = (roadObj: RoadObj, map: any) => {
  const polygonPath = [
    new naver.maps.LatLng(roadObj.coordinates[0][1], roadObj.coordinates[0][0]),
    new naver.maps.LatLng(roadObj.coordinates[1][1], roadObj.coordinates[1][0]),
  ];
  const polygon = new naver.maps.Polygon({
    paths: polygonPath,
    strokeColor: "#FF0000",
    strokeOpacity: 0.4,
    strokeWeight: 5,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    zIndex: 1,
    clickable: true,
    map: map,
  });
  naver.maps.Event.addListener(polygon, "click", () => {
    onclickRoad(roadObj.uid, map);
  });
};
