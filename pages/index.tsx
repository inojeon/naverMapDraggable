import type { NextPage } from "next";
import InfoDialog from "../components/InfoDialog";
import NaverMap from "../components/NaverMap";
import RoadEditDialog from "../components/RoadEditDialog";

const Home: NextPage = () => {
  return (
    <>
      {/* <h1 className="my-10 text-3xl">Naver Map test </h1> */}
      <div className="w-full relative">
        <NaverMap />
        <InfoDialog x={0} y={0} />
        <InfoDialog x={0} y={288} />
        <InfoDialog x={0} y={576} />

        <RoadEditDialog x={600} y={200} />
      </div>
    </>
  );
};

export default Home;
