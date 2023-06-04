import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, useActionData } from "react-router-dom";

import CreditApplications from "./pages/CreditApplications";
import Sheet from "./pages/Sheet";
import CreditRequest from './pages/CreditRequest';
import SheetCreditRequest from './pages/SheetCreditRequest';
import CreditCardAuthorizations from './pages/CreditCardAuthorizations';


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div className="content">
            <Routes>
              <Route path="/creditApplication" element={<CreditApplications />} />
            </Routes>
            <Routes>
              <Route path="/creditRequest" element={<CreditRequest />} />
            </Routes>
            <Routes>
              <Route path="/creditCardAuthorization" element={<CreditCardAuthorizations/>} />
            </Routes>
            <Routes>
              <Route path="/sheet" element={<Sheet />} />
            </Routes>
            <Routes>
              <Route path="/sheetCreditRequest" element={<SheetCreditRequest/>} />
            </Routes>
            
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
