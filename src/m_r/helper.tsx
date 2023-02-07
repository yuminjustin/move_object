import { useEffect, useState } from "react";
interface Prop {
  isMove:boolean;
  source: mrObject2;
  setDrag: Function;
  seRize: Function;
  releaseDrag: Function;
}
const MRHelper = (props: Prop) => {
  const [isDrag, setIsDrag] = useState<boolean>(!1);
  const [points, setPoints] = useState<Array<string>>([
    "top",
    "right",
    "bottom",
    "left",
  ]);
  const mouseDown = (e: any) => {
    e.stopPropagation();
    // 左键
    if (e.nativeEvent.which == 1) {
      setIsDrag(!0);
      props.setDrag();
    }
  };
  const mouseMove = (e: any, pos: string, type: string) => {
    e.stopPropagation();
    if (isDrag)
      props.seRize(
        {
          left: e.movementX,
          top: e.movementY,
        },
        pos,
        type,
        props.source
      );
    else return;
  };
  const mouseLeave = (e: any) => {
    e.stopPropagation();
    setIsDrag(!1);
    props.releaseDrag();
  };
  // const mouseUp = (e: any) => {
  //   e.stopPropagation();
  //   setIsDrag(!1);
  //   props.releaseDrag();
  // };
  useEffect(() => {
    const fn = () => {
      setIsDrag(!1);
      props.releaseDrag();
    };
    window.addEventListener("mouseup", fn);
    return () => {
      /* 卸载 */
      window.removeEventListener("mouseup", fn);
    };
  }, []);
  return (
    <div className={`_helper ${props.isMove?'':'_actived'}`}>
      <div className="_helper_line">
        {points.map((pname: string, idx: number) => {
          return [
            <span
              className={`_dot _${pname}`}
              key={`dot_${idx}`}
              onMouseDown={mouseDown}
              onMouseMove={(e) => mouseMove(e, pname, "dot")}
              onMouseUp={mouseLeave}
              // onMouseLeave={mouseLeave}
            ></span>,
            <span
              className={`_bar _${pname}`}
              key={`bar_${idx}`}
              onMouseDown={mouseDown}
              onMouseMove={(e) => mouseMove(e, pname, "bar")}
            ></span>,
          ];
        })}
      </div>
    </div>
  );
};

export default MRHelper;
