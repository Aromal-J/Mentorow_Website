import React from "react";
import wowmaker from "../logos/wowmaker.png";
import eunoians from "../logos/eunoians.png";
import webandcrafts from "../logos/webandcrafts.png";
import aabasoft from "../logos/aabasoft.png";
import focaloid from "../logos/focaloid.png";
import fengo from "../logos/fengo.png";
import first from "../svg/first.svg";
import second from "../svg/second.svg";
import third from "../svg/third.svg";
import fourth from "../svg/fourth.svg";
import "./test.css";
import InfinityLogoSlide from "../components/InfinityLogoSlide";

const Test = () => {
  return (
    <div className="main-container">
      <InfinityLogoSlide/>  
      <div className="simple-step-container">
        <div className="heading-container">
          <div className="heading-1">Simple Steps</div>
          <div className="heading-2">Start your Learning journey</div>
        </div>
        <div className="logo-card-container">
          <div className="logo-card">
            <img className="logo-svg" src={first} alt="" />
            <section className="logo-details">
              <div className="logo-card-heading">Tell us about yourself</div>
              <div className="logo-card-para">
                Let us know about your learning style, what your current course
                name level is and your goals for learing.
              </div>
            </section>
          </div>
          <div className="logo-card">
            <img className="logo-svg" src={second} alt="" />
            <section className="logo-details">
              <div className="logo-card-heading">Get expertly matched</div>
              <div className="logo-card-para">
                Our class coordinator will pair you up with your perfect tutor
                based on your profile and preferences.
              </div>
            </section>
          </div>
          <div className="logo-card">
            <img className="logo-svg" src={third} alt="" />
            <section className="logo-details">
              <div className="logo-card-heading">
                Take a free 30 min trial lesson
              </div>
              <div className="logo-card-para">
                Get familiar with your tutor and experience what it's like to
                learn with Live webinar.
              </div>
            </section>
          </div>
          <div className="logo-card">
            <img className="logo-svg" src={fourth} alt="" />
            <section className="logo-details">
              <div className="logo-card-heading">Schedule future lessons</div>
              <div className="logo-card-para">
                Use your online calendar to pick dates and times that suit you
                for future classes or just contact Us.
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test;
