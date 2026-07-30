import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import MobileBottomCTA from "./components/site/MobileBottomCTA";
import DesktopStickyCTA from "./components/site/DesktopStickyCTA";
import Home from "./pages/Home";
import Resort from "./pages/Resort";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { PrivacyPolicy, Terms, BookingPolicy } from "./pages/Policies";
import { useLenis } from "./hooks/useLenis";
import { useJsonLd } from "./hooks/useJsonLd";
import { travelAgencyLd, websiteLd } from "./lib/schema";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);
  return null;
}

function Shell() {
  useLenis();
  useJsonLd("organization", travelAgencyLd);
  useJsonLd("website", websiteLd);
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wayanad-resorts/lands-end-resort" element={<Resort />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/booking-policy" element={<BookingPolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <MobileBottomCTA />
      <DesktopStickyCTA />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </div>
  );
}
