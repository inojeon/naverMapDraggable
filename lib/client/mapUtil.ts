import { fetch_roadInfo } from "lib/web";
import { Dispatch, SetStateAction } from "react";
import useRoadPopupInfo from "./useRoadPopupInfo";

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

export const roadPopupInfo = (data: any, map: any) => {
  let locations: string[] = [];
  data.coordinates.map((coordinate: number[]) => {
    // locations.push("(" + coordinate.join(",") + ")");
    locations.push(coordinate.map((c) => c.toFixed(6)).join(" , "));
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
      <div class="p-4 flex flex-col gap-y-1">
        <div class="flex justify-between">
          <div class="font-bold">도로코드</div>
          <div>${data.uid}</div>
        </div>
        <div class="flex justify-between gap-x-4">
          <div class="font-bold">위도, 경도 1</div>
          <div>${locations[0]}</div>
        </div>
        <div class="flex justify-between border-b-2">
          <div class="font-bold">위도, 경도 2</div>
          <div>${locations[1]}</div>
        </div>
      
        <div class="flex justify-between">
          <div class="font-bold">경사도</div>
          <div>${data.stats_data.slope_degree.type}</div>
        </div>
        <div class="flex justify-between">
          <div class="font-bold">보행로</div>
          <div>${data.stats_data.side_walk.type}</div>
        </div>
        <div class="flex justify-between">
          <div class="font-bold">안전</div>
          <div>${data.stats_data.safety.type}</div>
        </div>
        <div class="flex justify-between">
          <div class="font-bold">환경</div>
          <div>${data.stats_data.environment.type}</div>
        </div>

        <div class="flex justify-between">
          <div class="font-bold">위험예측</div>
          <div>${data.risk}</div>
        </div>

      </div>
      `;

  console.log(roadInfoContent);

  const infoWindow = new naver.maps.InfoWindow({
    content: roadInfoContent,
    // "도로 코드 12312312<br />" +
    // "위치 서울특별시 마포구 도로명 1<br />",
    //maxWidth: 140,
    //backgroundColor: "#eee",
    //borderColor: "#2db400",
    //borderWidth: 5,
    anchorSize: new naver.maps.Size(0, 0), //new naver.maps.Size(30, 30),
    anchorSkew: true,
    //anchorColor: "#eee",
    //pixelOffset: new naver.maps.Point(20, -20),
  });
  // infoWindow.setContent(roadInfoContent);
  infoWindow.open(
    map,
    new naver.maps.LatLng(data.coordinates[0][1], data.coordinates[0][0])
  );
};

export const generateRoadPath = (
  // roadObj: RoadObj,
  coordinates: any[],
  uid: number,
  map: any,
  setSelectUid: Dispatch<SetStateAction<number | null>>
) => {
  const polygonPath = [
    new naver.maps.LatLng(coordinates[0][1], coordinates[0][0]),
    new naver.maps.LatLng(coordinates[1][1], coordinates[1][0]),
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
    // onClickRoad(uid, map);
  });

  naver.maps.Event.addListener(polygon, "mouseover", function () {
    setSelectUid(uid);
    polygon.setOptions({
      paths: polygonPath,
      strokeColor: "#E51D1A",
      strokeOpacity: 1,
    });
  });

  naver.maps.Event.addListener(polygon, "mouseout", function () {
    setSelectUid(null);
    polygon.setOptions({
      paths: polygonPath,
      strokeColor: "#ff0000",
      strokeOpacity: 0.6,
    });
  });
};

export const onRoadInfo = async (selectUid: number | null, map: any) => {
  if (selectUid) {
    const { ok, response_json } = await fetch_roadInfo({
      uid: selectUid,
    });
    if (ok) {
      roadPopupInfo(response_json.data, map);
    }
  }
};
