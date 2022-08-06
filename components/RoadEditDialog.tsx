import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import {
  CameraIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  MenuIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import clsx from "clsx";
import { useWindowSize } from "usehooks-ts";

interface RoadEditDialogProp {
  x?: number;
  y?: number;
}

const roadEditData = {
  address: "서울특별시 마포구 도로명 1",
  imageUrl: "",
  basicInfo: {
    roadCode: "123123",
    location: "서울특별시 마포구 도로명",
    detailClassification: "1",
    latitude: 23.123,
    longitude: 34.123,
  },
  roadInfo: {
    slope: "0~2",
    footpath: "보통",
    safety: "안전",
    environment: {
      flood: true,
      ice: true,
      environmentalDisaster: false,
    },
  },
  obstaclesInfo: {
    equipment: [
      { name: "가로수", value: 3 },
      { name: "가로등", value: 2 },
      { name: "볼라드", value: 3 },
    ],
    nonFixed: [
      { name: "항목명1", value: 3 },
      { name: "항목명2", value: 2 },
    ],
    other: [{ name: "항목명3", value: 3 }],
    riskPrediction: "안전",
  },
};

export default function RoadEditDialog({ x = 0, y = 0 }: RoadEditDialogProp) {
  const { width: windowWidth, height: windowHeigth } = useWindowSize();

  const [position, setPosition] = useState({ x, y }); // box의 포지션 값
  const [prevPosition, setPrevPositon] = useState({ x, y });
  const [isMinial, setIsManial] = useState(false);

  const ROADEDITDIALOG_WIDTH = 472;
  const ROADEDITDIALOG_HEIGTH = 58;

  const nodeRef = useRef(null);
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data: any) => {
    setPosition({ x: data.x, y: data.y });
  };

  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  });
  const onStart = () => {
    const { activeDrags } = state;
    setState({ ...state, activeDrags: activeDrags + 1 });
  };
  const onStop = () => {
    const { activeDrags } = state;
    setState({ ...state, activeDrags: activeDrags - 1 });
  };
  const dragHandlers = { onStart, onStop };

  useEffect(() => {
    if (isMinial) {
      setPosition({
        x: windowWidth - ROADEDITDIALOG_WIDTH,
        y: windowHeigth - ROADEDITDIALOG_HEIGTH,
      });
    }
  }, [windowWidth, windowHeigth]);

  useEffect(() => {
    if (isMinial) {
      setPrevPositon(position);
      setPosition({
        x: windowWidth - ROADEDITDIALOG_WIDTH,
        y: windowHeigth - ROADEDITDIALOG_HEIGTH,
      });
    } else {
      setPosition(prevPosition);
    }
  }, [isMinial]);

  return (
    <Draggable
      bounds="parent"
      {...dragHandlers}
      onDrag={(e, data) => trackPos(data)}
      defaultPosition={{ x, y }}
      position={position}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={clsx(
          "bg-white w-96 absolute  border z-[100] flex flex-col py-2 gap-y-2 top-0",
          isMinial ? "-translate-y-6" : ""
        )}
      >
        <div className="flex justify-between items-center gap-x-2 px-4">
          <h2 className=" font-bold">{roadEditData.address}</h2>
          <div className="flex">
            <button
              onClick={() => {
                setIsManial((prev) => !prev);
              }}
            >
              {isMinial ? (
                <ChevronDoubleUpIcon className="h-6 w-auto rounded-lg bg-slate-700 text-white m-1 p-1" />
              ) : (
                <ChevronDoubleDownIcon className="h-6 w-auto rounded-lg bg-slate-700 text-white m-1 p-1" />
              )}
            </button>
            <button>
              <XIcon className="h-6 w-auto rounded-lg bg-slate-700 text-white m-1 p-1" />
            </button>
          </div>
        </div>
        <div className={isMinial ? "hidden" : ""}>
          <div className="w-full bg-slate-800 aspect-video mx-auto relative  text-white text-xl">
            <p className=" absolute inset-0 flex justify-center items-center">
              Image
            </p>
            <div className=" absolute right-0">
              <button>
                <XIcon className="h-6 w-auto text-white  mt-2 mx-2 " />
              </button>
            </div>
            <div className=" absolute bottom-0 right-0">
              <button>
                <CameraIcon className="h-6 w-auto text-white mx-2 " />
              </button>
            </div>
          </div>
          <div className="mx-2">
            <h2 className=" font-bold">기본정보</h2>
          </div>
          <div className=" h-full w-40 bg-cyan-300 mx-auto rounded-full flex justify-center items-center">
            {/* Chart */}
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
