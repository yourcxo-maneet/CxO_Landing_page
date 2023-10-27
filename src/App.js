import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TTVfinal from "./pages/ttv-final/TTVfinal";
import CMO from "./pages/cmoPage/CMO";
import CFO from "./pages/cfoPage/CFO";
import CHRO from "./pages/chroPage/CHRO";
import CSO from "./pages/csoPage/CSO";
import CTO from "./pages/ctoPage/CTO";
import COO from "./pages/cooPage/COO";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<COO />} />
        <Route path="/meetyourcmo" element={<CMO />} />
        <Route path="/meetyourcfo" element={<CFO />} />
        <Route path="/meetyourchro" element={<CHRO />} />
        <Route path="/meetyourchro" element={<CHRO />} />
        <Route path="/meetyourcso" element={<CSO />} />
        <Route path="/meetyourcto" element={<CTO />} />
        <Route path="/getAdfunded" element={<TTVfinal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
