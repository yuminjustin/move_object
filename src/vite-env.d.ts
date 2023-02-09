/// <reference types="vite/client" />
interface mrObject {
  type: string;
  src?: string;
}
interface mrObject2 extends mrObject {
  index: number;
  zIndex: number;
  isDrag:boolean;
  left: number;
  top: number;
  width: number;
  height: number;
}
interface itemSize {
  width: number;
  height: number;
}
interface itemPosition {
  top: number;
  left: number;
}
interface Prop {
  list: Array<mrObject>;
  style: object;
  width: number;
  height: number;
}
