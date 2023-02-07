import { useState } from "react";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import "./assets/css/app.scss";
import MRContainer from "./m_r";
const App = () => {
  return (
    <MRContainer
      list={[
        { type: "img", src: img1 },
        { type: "img", src: img2 },
      ]}
      width={375}
      height={812}
      style={{
        margin: "0 auto",
        background: "#fff",
      }}
    />
  );
};

export default App;
