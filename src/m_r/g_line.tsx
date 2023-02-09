interface Prop {
  pos: String;
  style: object;
  distance: number;
}
const GLine = (props: Prop) => {
  return (
    <div className={`_guide_line ${props.pos} ${props.distance>0?'':'_hide'}`} key="left" style={props.style}>
      <i>{`${props.distance}`}</i>
    </div>
  );
};

export default GLine;
