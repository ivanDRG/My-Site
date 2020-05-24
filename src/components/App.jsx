import React from "react";
import Menu from "./Menu.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import ContactMobile from "./ContactMobile.jsx";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <div>
      <Menu />
      <Home />
      <About />
      <Projects />
      {isMobile ? <ContactMobile /> : <Contact />}
    </div>
  );
}

export default App;
