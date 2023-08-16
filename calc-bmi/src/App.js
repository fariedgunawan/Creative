import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Landing from "./page/Landing/Landing";
import Input from "./page/Input/Input";
import Hasil from "./page/Hasil/Hasil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/input" element={<Input />} />
        <Route path="/hasil" element={<Hasil />} />
      </Routes>
    </Router>
  );
}

export default App;
