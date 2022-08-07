import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useState } from "react";
import RoadInfoCheckInput from "./RoadInfoCheckInput";
import RoadMenuLists from "./RoadMenuLists";
import SearchInput from "./SearchInput";

const roadLists = [
  {
    title: "전체",
    conut: 123,
  },
  {
    title: "도로명 1",
  },
  {
    title: "도로명 2",
  },
  {
    title: "도로명 3",
  },
  {
    title: "도로명 4",
  },
];

const slopeLists = [
  {
    title: "전체",
    conut: 106,
  },
  {
    title: "경사도 0~2",
    conut: 34,
  },
  {
    title: "경사도 3~5",
    conut: 58,
  },
  {
    title: "경사도 5 이상",
    conut: 14,
  },
];

export default function RoadInfoMenuLists() {
  const [openLists, setOpenLists] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-y-2 overflow-auto px-2">
      <h1 className=" text-2xl font-bold">도로정보</h1>
      <div className="flex flex-col gap-y-2 overflow-auto">
        <RoadMenuLists title="도로" search={true} lists={roadLists} />
        <RoadMenuLists title="경사로" lists={slopeLists} />
        <RoadMenuLists title="보행로" lists={slopeLists} />
        <RoadMenuLists title="안전" lists={slopeLists} />
        <RoadMenuLists title="환경" lists={slopeLists} />
      </div>
    </div>
  );
}
