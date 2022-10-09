import React from "react";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Head />
        <Navbar />
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/contact" component={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
