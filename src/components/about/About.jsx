import React from "react";
import Me from "../images/BigMe.jpg";
import "./about.scss";

export const About = () => {
  return (
    <div className="about">
      <h1>A little bit about myself</h1>

      <div className="about-container">
        <div className="left">
          <img src={Me} alt="wilsonDev" />
        </div>
        <div className="right">
          <p>
            Hello, I'm a dedicated <span> software developer </span> who is
            passionate about creating innovative solutions. With a relentless
            drive for <span>self-improvement</span> , I am always seeking new
            knowledge and continuously honing my skills in the ever-evolving
            world of technology. <span> I thrive on challenges </span> and
            embrace hard work as an opportunity to push the boundaries of what's
            possible.
          </p>
          <p>
            <span> As a self-learner</span>, I am committed to staying ahead of
            the curve and leveraging cutting-edge tools and techniques to
            deliver high-quality software solutions that exceed expectations.
            With a strong work ethic and a genuine <span> love for coding</span>
            , I am ready to tackle any project and contribute to the success of
            your team or organization.
          </p>
        </div>
      </div>
    </div>
  );
};
