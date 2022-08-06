import Image from "next/image";
import Link from "next/link";
import BlueLBSLogo from "@images/BlueLBS.png";
import { CogIcon, MapIcon } from "@heroicons/react/outline";

export default function SideMenu() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col">
        <div className=" mx-auto py-5">
          <Link href="/">
            <button>
              <Image src={BlueLBSLogo} width="40" height="40" alt="logo" />
            </button>
          </Link>
        </div>
        <button className="flex flex-col justify-center items-center py-4 text-slate-500 hover:text-blue-600">
          <MapIcon className="  h-6 w-6 mb-1" />
          <p className=" text-xs text-center font-extrabold">통합정보</p>
        </button>
        <button className="flex flex-col justify-center items-center py-4 text-slate-500 hover:text-blue-600">
          <MapIcon className="  h-6 w-6 mb-1" />
          <p className=" text-xs text-center font-extrabold">도로정보</p>
        </button>
        <button className="flex flex-col justify-center items-center py-4 text-slate-500 hover:text-blue-600">
          <MapIcon className="  h-6 w-6 mb-1" />
          <p className=" text-xs text-center font-extrabold">건물정보</p>
        </button>
        <button className="flex flex-col justify-center items-center py-4 text-slate-500 hover:text-blue-600">
          <MapIcon className="  h-6 w-6 mb-1" />
          <p className=" text-xs text-center font-extrabold">장애물정보</p>
        </button>
        <button className="flex flex-col justify-center items-center py-4 text-slate-500 hover:text-blue-600">
          <MapIcon className="  h-6 w-6 mb-1" />
          <p className=" text-xs text-center font-extrabold">실시간관제</p>
        </button>
      </div>
      <div className="flex flex-col">
        <button className="flex flex-col justify-center items-center py-4 text-slate-500 hover:text-blue-600">
          <CogIcon className="  h-6 w-6 mb-1" />
          <p className=" text-xs text-center font-extrabold">설정</p>
        </button>
      </div>
    </div>
  );
}
