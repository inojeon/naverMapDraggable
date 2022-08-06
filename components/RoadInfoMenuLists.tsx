import { ChevronDownIcon } from "@heroicons/react/outline";
import RoadInfoCheckInput from "./RoadInfoCheckInput";
import SearchInput from "./SearchInput";

export default function RoadInfoMenuLists() {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className=" text-2xl font-bold">도로정보</h1>
      {/* 도로 */}
      <div className="">
        <div className="flex justify-between items-center gap-y-2">
          <h2 className=" text-lg font-bold">도로</h2>
          <ChevronDownIcon className="h-6 w-auto" />
        </div>
        <div className=" border-l-2 p-2 flex flex-col gap-y-4">
          <div>
            <SearchInput />
          </div>
          <div className="flex flex-col py-2 gap-y-2 overflow-auto h-28">
            <RoadInfoCheckInput title="전체" count={123} />
            <RoadInfoCheckInput title="전체" count={123} />
            <RoadInfoCheckInput title="전체" count={123} />
            <RoadInfoCheckInput title="전체" count={123} />
            <RoadInfoCheckInput title="전체" count={123} />
          </div>
        </div>
      </div>
    </div>
  );
}
