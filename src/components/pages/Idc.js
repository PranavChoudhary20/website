import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Video from "../../utils/videos/rain.mp4";

function Idc() {
  const video = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "-1",
  };
  return (
    <>
      <video src={Video} autoPlay loop muted style={video} />
      <h1 className="products">IDC</h1>
      <Footer />;
    </>
  );
}

export default Idc;
