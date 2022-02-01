import React from "react";
import Account from "./components/pages/Account";
import Landing from "./components/pages/Landing";
import Team from "./components/pages/Team";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
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
          <Route path="/Services" element={<Services />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
