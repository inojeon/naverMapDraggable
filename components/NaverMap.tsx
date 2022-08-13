import {
  generateRoadPath,
  onRoadInfo,
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

  const [initLoad, setInitLoad] = useState(false);
  const [selectUid, setSelectUid] = useState<number | null>(null);

  const mapRef = useRef<HTMLElement | null | any>(null);

  // api(촉기 위차, 지도 데이터) 요청이 들어온 이후 맵 초기화 및 지도에 도료 표시 및 이벤트 등록
  useEffect(() => {
    //imspOk, roadDataOk 요청 받고 최초 1회만
    if (imspOk && roadDataOk && !initLoad) {
      mapRef.current = new naver.maps.Map("map", mapOption);
      setInitPostition(mapRef.current, imspData?.longitude, imspData?.latitude);
      // setInitZoom(map, imspData?.zoom);
      roadData.data.map(({ coordinates, uid }: RoadObj) => {
        generateRoadPath(coordinates, uid, mapRef.current, setSelectUid);
      });
      setInitLoad(true);
    }
  }, [roadDataOk, imspData]);

  //selectUid 값이 변경된 경우 -> generateRoadPath를 클릭한 경우
  useEffect(() => {
    onRoadInfo(selectUid, mapRef.current);
  }, [selectUid]);

  // console.log(roadData);
  if (roadData) {
  }

  return (
    <>
      <div id="map" style={mapStyle}></div>
    </>
  );
}
