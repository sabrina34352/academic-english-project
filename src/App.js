import React from "react";

import { Footer, Possibility, Features, WhatGPT3, Header } from "./containers";
import { CTA, NavBar } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <NavBar />
        <Header />
      </div>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
