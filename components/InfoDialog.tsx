import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { MenuIcon } from "@heroicons/react/solid";

interface InfoDialogProp {
  x?: number;
  y?: number;
}

export default function InfoDialog({ x = 0, y = 0 }: InfoDialogProp) {
  const [position, setPosition] = useState({ x, y }); // box의 포지션 값

  const nodeRef = useRef(null);

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

  return (
    <Draggable
      bounds="parent"
      {...dragHandlers}
      onDrag={(e, data) => trackPos(data)}
      defaultPosition={{ x, y }}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="bg-white w-64 h-72 absolute top-0  border z-[100] flex flex-col p-4 gap-y-4"
      >
        <div className="flex gap-x-2">
          <MenuIcon className="h-6 w-auto" />
          <h2 className=" font-bold">도로정보</h2>
        </div>
        <div className="rounded-full border-2 border-slate-400 py-1 px-4 flex justify-between items-center">
          <p className="text-3xl"> &#8249;</p>
          <p>경사도</p>
          <p className="text-3xl">&#8250;</p>
        </div>
        <div className=" h-full w-40 bg-cyan-300 mx-auto rounded-full flex justify-center items-center">
          {/* Chart */}
          x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
        </div>
      </div>
    </Draggable>
  );
}
