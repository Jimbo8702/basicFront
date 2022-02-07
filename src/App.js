import React from "react";
import Wallet from "./components/pages/Wallet";
import Landing from "./components/pages/Landing";
import Upload from "./components/pages/Upload";
import Signup from "./components/pages/Signup";
import MarketPlace from "./components/pages/MarketPlace";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function WebsiteContainer() {
  return (
    <div className="body">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Marketplace" element={<MarketPlace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
