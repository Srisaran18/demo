import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
