import {
  generateRoadPath,
  RoadObj,
  setInitPostition,
} from "lib/client/mapUtil";
import useImsp from "lib/client/useIMSP";
import useRoadAd from "lib/client/useRoadAd";
import { useState } from "react";
import { useEffect, useRef } from "react";

const mapStyle = {
  width: "100%",
  height: "100vh",
};

const mapOption = {
  // center: new naver.maps.LatLng(imspData?.longitude, imspData?.latitude),
  zoom: 17,
  // zoom: imspData?.zoom,
  maxZoom: 17,
  minZoom: 13, //지도의 최소 줌 레벨
  zoomControl: true, //줌 컨트롤의 표시 여부
  zoomControlOptions: {
    //naver.maps.Position.TOP_RIGHT == 3
    position: 3,
  },
  scaleControl: true,
  logoControl: true,
  mapDataControl: true,
  mapTypeControl: true,
};

export default function NaverMap() {
  const { ok: imspOk, data: imspData } = useImsp();
  const { ok: roadDataOk, data: roadData } = useRoadAd();

  const [selectUid, setSelectUid] = useState<number | null>(null);

  const mapRef = useRef<HTMLElement | null | any>(null);

  // console.log(selectUid);
  useEffect(() => {
    if (imspOk && roadDataOk) {
      const map = new naver.maps.Map("map", mapOption);
      setInitPostition(map, imspData?.longitude, imspData?.latitude);
      // setInitZoom(map, imspData?.zoom);

      roadData.data.map(({ coordinates, uid }: RoadObj) => {
        generateRoadPath(coordinates, uid, map, setSelectUid);
      });
    }
  }, [imspOk, imspData]);

  // console.log(roadData);
  if (roadData) {
  }

  return <div id="map" ref={mapRef} style={mapStyle}></div>;
}
