import { useEffect } from "react";

const latitude = 37.5368508; // 위도
const longitude = 127.0798058; // 경도
// const mapOptions = {
//   // center: new naver.maps.LatLng(37.3595704, 127.105399),
//   center: new naver.maps.LatLng(latitude, longitude - 0.0015),

//   zoom: 19,
//   zoomControl: true,
//   zoomControlOptions: {
//     style: naver.maps.ZoomControlStyle.BIG,
//     position: naver.maps.Position.RIGHT_CENTER,
//   },

//   mapTypeControl: true,
//   mapTypeControlOptions: {
//     style: naver.maps.MapTypeControlStyle.BUTTON,
//     position: naver.maps.Position.TOP_RIGHT,
//   },

//   scaleControl: true,
//   // scaleControlOptions: {
//   //   position: naver.maps.Position.RIGHT_CENTER
//   // },

//   logoControl: true,
//   logoControlOptions: {
//     position: naver.maps.Position.BOTTOM_RIGHT,
//   },

//   mapDataControl: true,
//   mapDataControlOptions: {
//     position: naver.maps.Position.BOTTOM_LEFT,
//   },

//   disableKineticPan: false,
//   tileTransition: true,

//   aroundControl: true,
//   aroundControlOptions: {
//     position: naver.maps.Position.TOP_RIGHT,
//   },
// };

export default function NaverMap() {
  useEffect(() => {
    let map = null;
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13, //지도의 초기 줌 레벨
        minZoom: 7, //지도의 최소 줌 레벨
        zoomControl: true, //줌 컨트롤의 표시 여부
        zoomControlOptions: {
          //줌 컨트롤의 옵션
          position: naver.maps.Position.TOP_RIGHT,
        },
        scaleControl: true,
        logoControl: true,
        mapDataControl: true,
        // zoomControl: true,
        mapTypeControl: true,
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
