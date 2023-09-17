import React from "react";
import HomeFeed from "./components/HomeFeed";
import MiddleFeed from "./components/MiddleFeed"
import Works from "./components/Works"
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main">
      <HomeFeed />
      <MiddleFeed />
      <Projects />
      {/* <Works /> */}
      <Contact />
    </div>
  );
}

export default App;
