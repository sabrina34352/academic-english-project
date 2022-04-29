import React from "react";
import "./header.css";
import Pic from "../../photos/heartattack.png";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Cardiac arrest</h1>
        <p>
          One of main reasons of people’s death all along the world. Especially
          old people, people with obesity, and many other people have risk of
          Cardiac Arrest. When sudden Cardiac Arrest strikes, heart suddenly and
          unexpectedly stops beating effectively and blood flow stops. Without
          any intervention, the brain, vital organs, and our heart will begin to
          die. Brain damage will start to set in within four minutes and after
          10 minutes, brain damage becomes irreversible.
        </p>
      </div>
      <div className="gpt3__header-image">
        <img src={Pic} alt="heart" />
      </div>
    </div>
  );
}

export default Header;
