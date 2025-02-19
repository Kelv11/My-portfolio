import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/services/services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default App;
