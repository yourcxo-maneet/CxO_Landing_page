import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TTVfinal from "./pages/ttv-final/TTVfinal";
import CMO from "./pages/cmoPage/CMO";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TTVfinal />} />
        <Route path="/cmo" element={<CMO />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
