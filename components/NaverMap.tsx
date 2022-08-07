import useBSRoad from "lib/client/useBSRoad";
import useInitNaverMap from "lib/client/useInitNaverMap";
import useRoadAd from "lib/client/useRoadAd";

const mapStyle = {
  width: "100%",
  height: "100vh",
};
interface RoadObj {
  coordinates: any[];
  uid: number;
}

export default function NaverMap() {
  useInitNaverMap();

  // useBSRoad();
  const { ok: roadDataOk, data: roadData } = useRoadAd();

  console.log(roadData);
  if (roadData) {
    roadData.data.map((roadObj: RoadObj) => {
      let polygonPath = [];
      polygonPath.push(
        new naver.maps.LatLng(
          roadObj.coordinates[0][1],
          roadObj.coordinates[0][0]
        )
      );
      polygonPath.push(
        new naver.maps.LatLng(
          roadObj.coordinates[1][1],
          roadObj.coordinates[1][0]
        )
      );

      var polygon = new naver.maps.Polygon({
        paths: polygonPath,
        strokeColor: "#FF0000",
        strokeOpacity: 0.4,
        strokeWeight: 12,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        zIndex: 1,
        clickable: true,
        // map: map,
      });
      // naver.maps.Event.addListener(polygon, "click", () => {
      //   onclickRoad(roadObj.uid);
      // });
    });
  }

  return <div id="map" style={mapStyle}></div>;
}
