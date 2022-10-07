import React from "react";
import MenuGallery from "../components/MenuGallery";
import "../styles/Home.css";
function Home() {
  return (
    <>
      <div className="banner">
        <div className="text">
          <p>The Tasted Coffee</p>
          <h1>
            Freshly Roasted <br />
            Coffee
          </h1>
          <button>Learn More</button>
        </div>
      </div>
      <MenuGallery />
    </>
  );
}

export default Home;
