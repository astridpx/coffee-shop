import React from "react";
import { FaBars } from "react-icons/fa";
import Leaves from "../assets/images/leaves.svg";
import User from "../assets/images/user.svg";
import Headset from "../assets/images/headset2.svg";
import Cart from "../assets/images/cart.svg";
import Line from "../assets/images/line.svg";

// import { IconName } from "react-icons/fa";
import "../styles/Head.css";

function Head() {
  return (
    <>
      <div className="head">
        <div className="left">
          <img src={Headset} />
          <div className="contact">
            <h4>Astrid</h4>
            <h5>63-997-611</h5>
          </div>
        </div>

        <div className="middle">
          <img src={Leaves} />
          <h3>BARISTA</h3>
        </div>
        <div className="right">
          <img src={User} />
          <img src={Line} />
          <div className="cart-wrapper">
            <img src={Cart} id="cart" />
          </div>
          <span>
            <p>0</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Head;
