import React from "react";
import pic from "../../photos/cpr_inside_look.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={pic} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          Follow these steps for performing CPR compressions:
        </h1>
        <p>
          1. Put the person on his or her back on a firm surface.
          <br /> 2. Kneel next to the person's neck and shoulders. <br />
          3. Place the lower palm (heel) of your hand over the center of the
          person's chest, between the nipples. <br />
          4. Place your other hand on top of the first hand. Keep your elbows
          straight and position your shoulders directly above your hands.
          <br /> 5. Push straight down on (compress) the chest at least 2 inches
          (5 centimeters) but no more than 2.4 inches (6 centimeters). Use your
          entire body weight (not just your arms) when doing compressions.{" "}
          <br /> 6. If you haven't been trained in CPR, continue chest
          compressions until there are signs of movement or until emergency
          medical personnel take over. If you have been trained in CPR, go on to
          opening the airway and rescue breathing.
        </p>
      </div>
    </div>
  );
};

export default Possibility;
