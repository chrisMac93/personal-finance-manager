import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
// import { CiMenuKebab } from "react-icons/ci";
import "./App.css";

const App = () => {
  

  
  // Add event listener to close menus when clicking outside

  return (
    <Router>
      
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
          </Routes>
    </Router>
  );
};

export default App;
