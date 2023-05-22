import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, useActionData } from "react-router-dom";

import CreditApplications from "./pages/CreditApplications";
import Sheet from "./pages/Sheet";


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div className="content">
            <Routes>
              <Route path="/" element={<CreditApplications />} />
            </Routes>
            <Routes>
              <Route path="/sheet" element={<Sheet />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
