import React from "react";
import first from "../svg/first.svg";
import second from "../svg/second.svg";
import third from "../svg/third.svg";
import fourth from "../svg/fourth.svg";
import "./cards.css";

function CompanyLogo() {
  return (
    <div className="container">
      <div className="heading-container">
        <div className="heading-1">Simple Steps</div>
        <div className="heading-2">Start your Learning journey</div>
      </div>
      <div className="cards-container">
        <div className="card-container">
          <img className="card-logo-img" src={first} alt="" />

          <div className="card-details">
            <div className="card-heading">Tell us about yourself</div>
            <div className="card-para">
              Let us know about your learning style, what your current course
              name level is and your goals for learing.
            </div>
          </div>
        </div>
        <div className="card-container">
          <img className="card-logo-img" src={second} alt="" />

          <div className="card-details">
            <div className="card-heading">Get expertly matched</div>
            <div className="card-para">
              Our class coordinator will pair you up with your perfect tutor
              based on your profile and preferences.
            </div>
          </div>
        </div>
        <div className="card-container">
          <img className="card-logo-img" src={third} alt="" />

          <div className="card-details">
            <div className="card-heading">Take a free 30 min trial lesson</div>
            <div className="card-para">
              Get familiar with your tutor and experience what it's like to
              learn with Live webinar.
            </div>
          </div>
        </div>
        <div className="card-container">
          <img className="card-logo-img" src={fourth} alt="" />

          <div className="card-details">
            <div className="card-heading">Schedule future lessons</div>
            <div className="card-para">
              Use your online calendar to pick dates and times that suit you for
              future classes or just contact Us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogo;
