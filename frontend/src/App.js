import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import MobileBottomCTA from "./components/site/MobileBottomCTA";
import DesktopStickyCTA from "./components/site/DesktopStickyCTA";
import Home from "./pages/Home";
import Resort from "./pages/Resort";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destination from "./pages/Destination";
import Packages from "./pages/Packages";
import PackageResort from "./pages/PackageResort";
import { DESTINATIONS, PACKAGE_RESORTS } from "./lib/destinations";
import { PrivacyPolicy, Terms, BookingPolicy } from "./pages/Policies";
import { useLenis } from "./hooks/useLenis";
import { useJsonLd } from "./hooks/useJsonLd";
import { travelAgencyLd, websiteLd } from "./lib/schema";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const element = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (element) { element.scrollIntoView({ behavior: "instant", block: "start" }); return; }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

function LegacyResortRedirect() {
  const { search, hash } = useLocation();
  return <Navigate replace to={{ pathname: "/wayanad/lands-end-resort", search, hash }} />;
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
        {DESTINATIONS.map((destination) => <Route key={destination.id} path={destination.path} element={<Destination destination={destination} />} />)}
        {PACKAGE_RESORTS.map((resort) => <Route key={resort.id} path={resort.path} element={<PackageResort resort={resort} />} />)}
        <Route path="/packages" element={<Packages />} />
        <Route path="/wayanad/lands-end-resort" element={<Resort />} />
        <Route path="/wayanad-resorts/lands-end-resort" element={<LegacyResortRedirect />} />
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
