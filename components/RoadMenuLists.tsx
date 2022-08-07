import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useState } from "react";
import RoadInfoCheckInput from "./RoadInfoCheckInput";
import SearchInput from "./SearchInput";

const slopeLists = [
  {
    title: "전체",
    count: 106,
  },
  {
    title: "경사도 0~2",
    count: 34,
  },
  {
    title: "경사도 3~5",
    count: 58,
  },
  {
    title: "경사도 5 이상",
    count: 14,
  },
];

interface MenuList {
  title: string;
  count?: number;
}

interface RoadMenuListsProps {
  title: string;
  lists: MenuList[];
  search?: boolean;
}

export default function RoadMenuLists({
  title,
  lists,
  search = false,
}: RoadMenuListsProps) {
  const [openLists, setOpenLists] = useState<boolean>(true);

  return (
    <div className="">
      <div className="flex justify-between items-center gap-y-2 my-3 mr-4">
        <h2 className=" text-lg font-bold">{title}</h2>
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
        <div className=" border-l-2 pl-2 pr-4 flex flex-col gap-y-4 ">
          {search && <SearchInput />}
          <div className="flex flex-col gap-y-2 overflow-auto h-28 pt-2">
            {lists.map((item, idx) => (
              <RoadInfoCheckInput
                title={item.title}
                count={item.count}
                key={idx}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
