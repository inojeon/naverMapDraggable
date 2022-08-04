import { useEffect } from "react";

export default function NaverMap() {
  useEffect(() => {
    let map = null;
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13,
      });
    };
    initMap();
  }, []);

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: "100%",
    height: "100vh",
  };

  return <div id="map" style={mapStyle}></div>;
}
