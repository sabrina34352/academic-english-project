import React from "react";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Ann</a>
    </p>
    <p>
      <a href="#wgpt3">Sabrina</a>
    </p>
    <p>
      <a href="#possibility">Shavkat</a>
    </p>
    <p>
      <a href="#features">Vensan</a>
    </p>
  </>
);

function NavBar() {
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="gpt3_navbar-sign">
        <p>Fake button</p>
        <button type="button">Fake button2</button>
      </div>
    </div>
  );
}

export default NavBar;
