import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Products } from "./components/products";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { ProductPage } from "./components/productPage";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <Products data={landingPageData.Products} />
              <About data={landingPageData.About} />
              <Contact data={landingPageData.Contact} />
            </>
          } />
          <Route path="/honey" element={<ProductPage data={landingPageData.honey} footer={landingPageData.Contact} />} />
          <Route path="/jaggery" element={<ProductPage data={landingPageData.jaggery} footer={landingPageData.Contact} />} />
          <Route path="/dryCoconut" element={<ProductPage data={landingPageData.dryCoconut} footer={landingPageData.Contact} />} />
          <Route path="/nariyal" element={<ProductPage data={landingPageData.nariyal} footer={landingPageData.Contact} />} />
          <Route path="/onionPotato" element={<ProductPage data={landingPageData.onionPotato} footer={landingPageData.Contact} />} />
          <Route path="/fruits" element={<ProductPage data={landingPageData.fruits} footer={landingPageData.Contact} />} />
          <Route path="/vegetables" element={<ProductPage data={landingPageData.vegetables} footer={landingPageData.Contact} />} />
          <Route path="/spices" element={<ProductPage data={landingPageData.spices} footer={landingPageData.Contact} />} />
          <Route path="/maize" element={<ProductPage data={landingPageData.maize} footer={landingPageData.Contact} />} />
          <Route path="/rice" element={<ProductPage data={landingPageData.rice} footer={landingPageData.Contact} />} />
          <Route path="/papadam" element={<ProductPage data={landingPageData.papadam} footer={landingPageData.Contact} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
