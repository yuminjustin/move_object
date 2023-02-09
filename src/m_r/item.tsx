import { useState, useEffect } from "react";
import MRHelper from "./helper";
import MRHelper2 from "./helper2";
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
  const [isTop, setIsTop] = useState<boolean>(!1);
  const [isRight, setIsRight] = useState<boolean>(!1);
  const [isBottom, setIsBottom] = useState<boolean>(!1);
  const [isLeft, setIsLeft] = useState<boolean>(!1);
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
    if (isDrag) {
      props.setPosition(
        {
          left: e.movementX,
          top: e.movementY,
        },
        props.source
      );
      if (e.movementY < 0) {
        setIsTop(!0);
        setIsBottom(!1);
      } else {
        setIsTop(!1);
        setIsBottom(!0);
      }
      if (e.movementX > 0) {
        setIsLeft(!0);
        setIsRight(!1);
      } else {
        setIsLeft(!1);
        setIsRight(!0);
      }
    } else return;
  };
  const mouseLeave = () => {
    setIsDrag(!1);
    recoverStatus();
  };
  const setDrag = () => {
    setIsMove(!1);
    props.setDrag(props.source);
  };
  const releaseDrag = () => {
    setIsMove(!0);
    recoverStatus();
  };
  const recoverStatus = () => {
    props.releaseDrag(props.source);
    isTop && setIsTop(!1);
    isRight && setIsRight(!1);
    isBottom && setIsBottom(!1);
    isLeft && setIsLeft(!1);
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
        className={`_help_box ${isDrag ? "_no_hover" : "_has_hover"}`}
        style={{
          width: props.source.width,
          height: props.source.height,
          top: props.source.top,
          left: props.source.left,
          zIndex: isMove ? 1 : 2,
        }}
      >
        <MRHelper
          isMove={isMove}
          setDrag={setDrag}
          releaseDrag={releaseDrag}
          seRize={props.seRize}
          source={props.source}
        />
        <MRHelper2
          fsize={props.fsize}
          source={props.source}
          isMove={isMove}
          isTop={isTop}
          isRight={isRight}
          isBottom={isBottom}
          isLeft={isLeft}
        />
      </div>
    </div>
  );
};

export default MoveResize;
