import "./about.css";

import React from "react";
import Hello from "../Hello/Hello";

const About = ({ name }) => {

    document.title = "hello from about"

  return (
    <div className="about">
      <h2>About sivu, name propsina {name}</h2>
      <Hello />
    </div>
  );
};

export default About;
