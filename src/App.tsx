import React from "react";
import Sidebar from "./LayoutComponents/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
