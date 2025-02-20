import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/services/services";
import MyWork from "./components/MyWork/MyWork";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
    </div>
  );
};

export default App;
