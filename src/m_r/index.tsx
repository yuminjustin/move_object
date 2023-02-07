import { useState } from "react";
import "../assets/css/m_r.scss";
import MoveResize from "./item";
import OriginBox from "./item2";
import { listMaker } from "./utils";
const MRContainer = (props: Prop) => {
  const [list, setList] = useState<Array<mrObject2>>(listMaker(props.list));
  const setSize = (re: itemSize, item: mrObject2) => {
    list[item.index] = Object.assign(item, re);
    let temp = list.slice();
    setList(temp);
  };
  const setPosition = (pos: itemPosition, item: mrObject2) => {
    item.left += pos.left;
    item.top += pos.top;
    list[item.index] = item;
    let temp = list.slice();
    setList(temp);
  };
  const setDrag = (item: mrObject2) => {
    list[item.index].zIndex = 9999;
    let temp = list.slice();
    setList(temp);
  };
  const releaseDrag = (item: mrObject2) => {
    list[item.index].zIndex = list[item.index].index + 1;
    let temp = list.slice();
    setList(temp);
  };
  const seRize = (
    pos: itemPosition,
    posName: string,
    type: string,
    item: mrObject2
  ) => {
    if (
      (item.width == 1 && pos.left < 0) ||
      (item.height == 1 && pos.top < 0)
    )
      return;
    if (type == "dot") {
      if (posName == "top") {
        item.width -= pos.left;
        item.height -= pos.top;
        item.left += pos.left;
        item.top += pos.top;
      } else if (posName == "right") {
        item.top += pos.top;
        item.width += pos.left;
        item.height -= pos.top;
      } else if (posName == "bottom") {
        item.width += pos.left;
        item.height += pos.top;
      } else if (posName == "left") {
        item.left += pos.left;
        item.width -= pos.left;
        item.height += pos.top;
      }
    } else {
      if (posName == "top") {
        item.top += pos.top;
        item.height -= pos.top;
      } else if (posName == "right") {
        item.width += pos.left;
      } else if (posName == "bottom") {
        item.height += pos.top;
      } else if (posName == "left") {
        item.left += pos.left;
        item.width -= pos.left;
      }
    }
    list[item.index] = item;
    let temp = list.slice();
    setList(temp);
  };
  return (
    <div
      className="_mr_container"
      style={Object.assign(
        { width: props.width, height: props.height },
        props.style
      )}
    >
      <div
        className="_view_box"
        style={{ width: props.width, height: props.height }}
      >
        {list.map((item: mrObject2, key: number) => {
          return (
            <OriginBox
              source={item}
              key={key}
              fsize={{ width: props.width, height: props.height }}
              setSize={setSize}
            />
          );
        })}
      </div>
      <div
        className="_help_box"
        style={{ width: props.width, height: props.height }}
      >
        {list.map((item: mrObject2, key: number) => {
          return (
            <MoveResize
              source={item}
              key={key}
              fsize={{ width: props.width, height: props.height }}
              setPosition={setPosition}
              setDrag={setDrag}
              seRize={seRize}
              releaseDrag={releaseDrag}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MRContainer;
