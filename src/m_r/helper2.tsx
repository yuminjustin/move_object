import { useEffect, useState } from "react";
import GLine from "./g_line";
interface Prop {
  fsize: itemSize;
  source: mrObject2;
  isMove: boolean;
  isTop: boolean;
  isRight: boolean;
  isBottom: boolean;
  isLeft: boolean;
}
const MRHelper2 = (props: Prop) => {
  const [top, setTop] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
  const [bottom, setBottom] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  useEffect(() => {
    setTop(props.source.top);
    setRight(props.fsize.width - (props.source.left + props.source.width));
    setBottom(props.fsize.height - (props.source.top + props.source.height));
    setLeft(props.source.left);
  }, [props]);
  return (
    <>
      {props.isTop && (
        <GLine pos="top" distance={top} style={{ height: top, top: -top }} />
      )}
      {props.isRight && (
        <GLine
          pos="right"
          distance={right}
          style={{ width: right, right: -right }}
        />
      )}
      {props.isBottom && (
        <GLine
          pos="bottom"
          distance={bottom}
          style={{ height: bottom, bottom: -bottom }}
        />
      )}
      {props.isLeft && (
        <GLine
          pos="left"
          distance={left}
          style={{ width: left, left: -left }}
        />
      )}
    </>
  );
};

export default MRHelper2;
