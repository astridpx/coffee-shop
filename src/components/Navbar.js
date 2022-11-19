import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSistrix, FaBars } from "react-icons/fa";
import Headset from "../assets/images/headset2.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className="navbar">
        <div className="left-side">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="right-side">
          {/* hidden link for android */}
          <div className="sidebar">
            <div
              className="hidden-overlay"
              id={openLinks ? "open" : "close"}
              onClick={(toggleNavbar) => {
                document.body.style.overflow = "";
                setOpenLinks(!openLinks);
              }}
            >
              <div className="hidden-links">
                <div className="contact-me">
                  <img src={Headset} id="hidden-img" />
                  <div className="contact">
                    <h4>Jerome Sy</h4>
                    <h5>63-997-611</h5>
                  </div>
                </div>
                <div className="line"></div>
                <div className="hidden-nav-link">
                  <Link to="/">Home</Link>
                  <Link to="/">Services</Link>
                  <Link to="/">About US</Link>
                  <Link to="/">Portfolio</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="menu" onClick={toggleNavbar}>
              <FaBars id="menu" />
            </div>
          </div>
          <div className="search">
            <input
              type="search"
              name="search"
              placeholder="Search..."
              autoComplete="off"
            />
            <label htmlFor="search">
              <FaSistrix />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
