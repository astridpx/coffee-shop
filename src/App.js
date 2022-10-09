import React from "react";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Head />
        <Navbar />
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path="/contact" component={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
