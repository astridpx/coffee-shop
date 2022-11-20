import React from "react";
import "../styles/Footer.css";

// Icons
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

// Bank Cards
import Card1 from "../assets/images/card1.png";
import Card2 from "../assets/images/card2.png";
import Card3 from "../assets/images/card3.png";
import Card4 from "../assets/images/card4.png";
import Card5 from "../assets/images/card5.png";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="contact">
            <h3>CONTACT INFO</h3>
            <div className="adress">
              <label htmlFor="adress">Adress:</label>
              <p name="address">
                Juan Luna Street 42, Brgy. Zone 5 Metro Manila
              </p>
            </div>
            <p>Phone: + 63 9733 837 9777</p>
            <p>Landline: 2933-323-3232</p>
            <p>Email: coffee@gmail.com</p>
            <div className="contact-bottom">
              <div className="soc-med">
                <FaFacebook className="icon" />
                <FaTwitter className="icon" />
                <FaGooglePlus className="icon" />
                <BsPinterest className="icon" />
                <FaYoutube className="icon" />
              </div>
            </div>
          </div>
          <div className="information">
            <h3>INFORMATION</h3>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
          </div>
          <div className="account">
            <h3>MY ACCOUNT</h3>
            <p>My Account</p>
            <p>Order History</p>
            <p>Wish List</p>
            <p>Newsletter</p>
            <p>Retunrs</p>
          </div>
          <div className="newsletter">
            <h3>NEWSLETTER</h3>
            <p>
              Subscribe to our newsletters now and stay up to date with new
              collections and exclusive offers
            </p>
            <form action="" className="subscribe">
              <p>Enter e-mail here...</p>
              <input type="email" placeholder="Type your email..." /> <br />
              <button type="button">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="bottom-footer">
          <h5>Powered By OpenCort Your Store &copy; 2022</h5>
          <h5>www.DownloadNewThemes.com</h5>
          <div className="credit-cards">
            <img src={Card2} />
            <img src={Card1} />
            <img src={Card3} />
            <img src={Card4} />
            <img src={Card5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
