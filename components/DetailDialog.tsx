import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function DetailDialog() {
  const [openContent, setOpenContent] = useState<boolean>(false);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값

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
  return (
    <Draggable
      bounds="parent"
      {...dragHandlers}
      onDrag={(e, data) => trackPos(data)}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="bg-white w-52 absolute top-0 border z-[100]"
      >
        <button
          onClick={() => {
            setOpenContent((prev) => !prev);
          }}
        >
          onclick
        </button>
        <div className={openContent ? "hidden" : ""}>
          x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
        </div>
      </div>
    </Draggable>
  );
}
