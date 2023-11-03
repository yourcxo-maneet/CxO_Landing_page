import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TTVfinal from "./pages/ttv-final/TTVfinal";
import CMO from "./pages/cmoPage/CMO";
import CFO from "./pages/cfoPage/CFO";
import CHRO from "./pages/chroPage/CHRO";
import CSO from "./pages/csoPage/CSO";
import CTO from "./pages/ctoPage/CTO";
import COO from "./pages/cooPage/COO";
import { Helmet } from "react-helmet";
import FacebookPixel from "./utils/FaceBookPixel";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("365229479176360"); // facebookPixelId
        ReactPixel.pageView();

        ReactPixel.pageView();
      });
  }, []);
  return (
    <BrowserRouter>
      <Helmet>
        <title>Fractional COO Services | Your CxO Online</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Meta Description: Drive operational efficiency with our fractional COO services. Learn how Your CxO Online can optimize your business operations and streamline your organizational processes."
        />
      </Helmet>
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
