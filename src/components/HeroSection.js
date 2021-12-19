import React from "react";
import "../App.css";

import { Button } from "./Button";
import "./HeroSection.css";
import Video from "../utils/videos/ice.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted />
      <h1>Hunter</h1>
      <p>Still Thinking...</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Lets Go
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Have Fun <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
