import { ReactNode, useState, useEffect, useRef } from "react";
import { getImageSize } from "./utils";
interface Prop {
  fsize: itemSize;
  source: mrObject2;
  setSize: Function;
}
const OriginBox = (props: Prop) => {
  useEffect(() => {
    if (props.source.type == "img") {
      props.source.width == 0 &&
        getImageSize(props.source.src).then((re: itemSize) => {
          props.setSize(re, props.source);
        });
    }
  }, []);
  return (
    <div
      className="_move_box"
      style={{
        width: props.source.width,
        height: props.source.height,
        top: props.source.top,
        left: props.source.left,
        zIndex: props.source.index + 1,
      }}
    >
      <>
        {props.source.type == "img" ? (
          <img
            className="_img"
            src={props.source.src}
            style={{
              width: props.source.width,
              height: props.source.height,
            }}
          />
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default OriginBox;
