import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useState } from "react";
import RoadInfoCheckInput from "./RoadInfoCheckInput";

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

export default function SlopeMenuLists() {
  const [openLists, setOpenLists] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-y-2">
      {/* 도로 */}
      <div className="">
        <div className="flex justify-between items-center gap-y-2 my-3">
          <h2 className=" text-lg font-bold">경사도</h2>
          <button
            onClick={() => {
              setOpenLists((prev) => !prev);
            }}
          >
            {openLists ? (
              <ChevronUpIcon className="h-6 w-auto" />
            ) : (
              <ChevronDownIcon className="h-6 w-auto" />
            )}
          </button>
        </div>
        {openLists && (
          <div className=" border-l-2 p-2 flex flex-col gap-y-4 ">
            <div className="flex flex-col gap-y-2 overflow-auto h-28">
              {slopeLists.map((item, idx) => (
                <RoadInfoCheckInput
                  title={item.title}
                  count={item.conut}
                  key={idx}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
