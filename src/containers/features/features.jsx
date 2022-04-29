import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Why Is CPR Important?",
    text: "Keeping the blood flow active – even partially – extends the opportunity for a successful resuscitation once trained medical staff arrive on site.",
  },

  {
    title: "Provide compressions of adequate rate and depth",
    text: "	Avoid leaning on the victim between compressions Ensure proper hand placement Avoid excessive ventilation",
  },

  {
    title: "Compressions: Restore blood flow",
    text: "Compressions means you'll use your hands to push down hard and fast in a specific way on the person's chest. Compressions are the most important step in CPR.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          {" "}
          Cardiopulmonary resuscitation (CPR){" "}
        </h1>
        <p>
          is a lifesaving technique that's useful in many emergencies, such as a
          heart attack or near drowning, in which someone's breathing or
          heartbeat has stopped. The American Heart Association recommends
          starting CPR with hard and fast chest compressions. This hands-only
          CPR recommendation applies to both untrained bystanders and first
          responders
        </p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
