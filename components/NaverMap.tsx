import useInitNaverMap from "lib/client/useInitNaverMap";

export default function NaverMap() {
  useInitNaverMap();

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: "100%",
    height: "100vh",
  };

  return <div id="map" style={mapStyle}></div>;
}
