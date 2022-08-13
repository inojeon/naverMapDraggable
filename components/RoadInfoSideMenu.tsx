import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import clsx from "clsx";
import RoadInfoMenuLists from "./RoadInfoMenuLists";

export default function RoadInfoSideMenu() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
  return (
    <div
      className={clsx(
        "absolute top-0  flex gap-y-4",
        isSideMenuOpen ? "h-full z-[100]" : "inset-y-0 left-0 z-[90]"
      )}
    >
      <div
        className={clsx(
          "w-64 bg-white h-full drop-shadow-lg py-4 px-2 flex flex-col gap-y-4",
          isSideMenuOpen ? "" : "hidden"
        )}
      >
        <RoadInfoMenuLists />
      </div>
      <div className="w-6 flex flex-col justify-center ">
        <div className=" bg-white h-12 w-6 flex justify-center item-center rounded-r-lg border-slate-400 border-r border-y z-[120]">
          <button onClick={() => setIsSideMenuOpen((prev) => !prev)}>
            {isSideMenuOpen ? (
              <ChevronLeftIcon className="w-5" />
            ) : (
              <ChevronRightIcon className="w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
