import { ReactNode, useState, useEffect, useRef } from "react";
import MRHelper from "./helper";
interface Prop {
  fsize: itemSize;
  source: mrObject2;
  setPosition: Function;
  setDrag: Function;
  releaseDrag: Function;
  seRize: Function;
}
const MoveResize = (props: Prop) => {
  const [isDrag, setIsDrag] = useState<boolean>(!1);
  const [isMove, setIsMove] = useState<boolean>(!0);
  useEffect(() => {}, []);
  const mouseDown = (e: any) => {
    // 左键
    if (e.nativeEvent.which == 1) {
      setIsDrag(!0);
      setIsMove(!0);
      props.setDrag(props.source);
    }
  };
  const mouseMove = (e: any) => {
    if (isDrag)
      props.setPosition(
        {
          left: e.movementX,
          top: e.movementY,
        },
        props.source
      );
    else return;
  };
  const mouseLeave = () => {
    setIsDrag(!1);
    props.releaseDrag(props.source);
  };
  // const mouseUp = () => {
  //   setIsDrag(!1);
  //   props.releaseDrag(props.source);
  // };
  const setDrag = () => {
    setIsMove(!1);
    props.setDrag(props.source);
  };
  const releaseDrag = () => {
    setIsMove(!0);
    props.releaseDrag(props.source);
  };
  return (
    <div
      className="_help_main"
      style={{
        zIndex: props.source.zIndex,
      }}
    >
      <div
        className={`_move_box ${isDrag ? "_darg" : ""}`}
        style={{
          width: props.source.width,
          height: props.source.height,
          top: props.source.top,
          left: props.source.left,
          zIndex: isMove ? 2 : 1,
        }}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseLeave}
        onMouseLeave={mouseLeave}
      ></div>
      <div
        className="_help_box"
        style={{
          width: props.source.width,
          height: props.source.height,
          top: props.source.top,
          left: props.source.left,
          zIndex: isMove ? 1 : 2,
        }}
      >
        <MRHelper
          isMove ={isMove}
          setDrag={setDrag}
          releaseDrag={releaseDrag}
          seRize={props.seRize}
          source={props.source}
        />
      </div>
    </div>
  );
};

export default MoveResize;
