import React from "react";
import Routes from "./Routes";
import { HashRouter as Router } from "react-router-dom"; // Changed from BrowserRouter to HashRouter

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
