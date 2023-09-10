import React from "react";
import HomeFeed from "./components/HomeFeed";
import MiddleFeed from "./components/MiddleFeed"
import Works from "./components/Works"

function App() {
  return (
    <div className="container">
      <HomeFeed />
      <MiddleFeed />
      <Works />
    </div>
  );
}

export default App;
