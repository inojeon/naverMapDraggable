import { useEffect } from "react";
import useImsp from "./useIMSP";

export default function useInitNaverMap() {
  const { ok: imspOk, data: imspData } = useImsp();
  // console.log(imspData);

  useEffect(() => {
    if (imspOk && imspData?.longitude && imspData?.latitude) {
      const initMap = () => {
        const map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(
            imspData?.longitude,
            imspData?.latitude
          ),
          zoom: 15,
          // zoom: imspData?.zoom,
          minZoom: 7, //지도의 최소 줌 레벨
          zoomControl: true, //줌 컨트롤의 표시 여부
          zoomControlOptions: {
            //줌 컨트롤의 옵션
            position: naver.maps.Position.TOP_RIGHT,
          },
          scaleControl: true,
          logoControl: true,
          mapDataControl: true,
          mapTypeControl: true,
        });
      };
      initMap();
    }
  }, [imspOk, imspData]);
}
