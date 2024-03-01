import React from "react";
import wowmaker from "../logos/wowmaker.png";
import eunoians from "../logos/eunoians.png";
import webandcrafts from "../logos/webandcrafts.png";
import aabasoft from "../logos/aabasoft.png";
import focaloid from "../logos/focaloid.png";
import fengo from "../logos/fengo.png";
import "./logo.css";

function InfinityLogoSlide() {
  return (
    <div className="logos-container">
      <div className="logos-slide">
        <img className="logos" src={wowmaker} alt="wowmaker-logo" />
        <img className="logos" src={eunoians} alt="eunoians-logo" />
        <img className="logos" src={webandcrafts} alt="webandcrafts-logo" />
        <img className="logos" src={aabasoft} alt="aabasoft-logo" />
        <img className="logos" src={focaloid} alt="focaloid-logo" />
        <img className="logos" src={fengo} alt="fengo-logo" />
      </div>
      <div className="logos-slide">
        <img className="logos" src={wowmaker} alt="wowmaker-logo" />
        <img className="logos" src={eunoians} alt="eunoians-logo" />
        <img className="logos" src={webandcrafts} alt="webandcrafts-logo" />
        <img className="logos" src={aabasoft} alt="aabasoft-logo" />
        <img className="logos" src={focaloid} alt="focaloid-logo" />
        <img className="logos" src={fengo} alt="fengo-logo" />
      </div>
      <div className="logos-slide">
        <img className="logos" src={wowmaker} alt="wowmaker-logo" />
        <img className="logos" src={eunoians} alt="eunoians-logo" />
        <img className="logos" src={webandcrafts} alt="webandcrafts-logo" />
        <img className="logos" src={aabasoft} alt="aabasoft-logo" />
        <img className="logos" src={focaloid} alt="focaloid-logo" />
        <img className="logos" src={fengo} alt="fengo-logo" />
      </div>
    </div>
  );
}

export default InfinityLogoSlide;
