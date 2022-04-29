import React from "react";
import { Feature } from "../../components";

import "./WhatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          What should be done if the person in front of you has cardiac arrest?
        </h1>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Firstly"
          text="call an ambulance or ask someone to call"
        />
        <Feature title="Secondly" text=" do the CPR" />
       
      </div>
    </div>
  );
};

export default WhatGPT3;
