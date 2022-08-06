import RoadInfoSideMenu from "@components/RoadInfoSideMenu";
import SideMenu from "@components/SideMenu";
import type { NextPage } from "next";
import NaverMap from "../components/NaverMap";

const RoadInfo: NextPage = () => {
  return (
    <div className="flex flex-col">
      {/* <h1 className="my-10 text-3xl">Naver Map test </h1> */}
      <div className="w-20 absolute z-[200] h-full">
        <SideMenu />
      </div>
      <div className="pl-20">
        <div className="w-full relative">
          <NaverMap />
          <RoadInfoSideMenu />
        </div>
      </div>
    </div>
  );
};

export default RoadInfo;
