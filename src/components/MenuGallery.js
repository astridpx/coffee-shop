import React, { useState } from "react";
import "../styles/MenuGallery.css";

// Service card
import Airplane from "../assets/images/airplane.svg";
import Wallet from "../assets/images/wallet.svg";
import Giftbox from "../assets/images/giftbox.svg";
import Headphone from "../assets/images/headphone.svg";

// top categories images
import Mocha from "../assets/images/coffee-mocha.jpg";
import Expresso from "../assets/images/coffee2.jpg";
import Cappuccino from "../assets/images/coffe3.jpg";

import Prod from "../assets/images/coffeeprod1.png";
import { RiShoppingBasketLine } from "react-icons/ri";
import SpecialProd from "../assets/images/coffeeprod2.png";
import BlogImg from "../assets/images/cofee-blog1.jpg";

// coffeee GAllery
import Gallley1 from "../assets/images/coffeeGal1.jpg";
import Gallley2 from "../assets/images/coffeeGal2.jpg";
import Gallley3 from "../assets/images/coffeeGal3.jpg";
import Gallley4 from "../assets/images/coffeeGal4.jpg";
import Gallley5 from "../assets/images/coffeeGal5.jpg";

// Brand Logoss
import Logo1 from "../assets/images/brand-logo1.png";
import Logo2 from "../assets/images/brand-logo2.png";
import Logo3 from "../assets/images/brand-logo3.png";
import Logo4 from "../assets/images/brand-logo4.png";
import Logo5 from "../assets/images/brand-logo5.png";
import Logo6 from "../assets/images/brand-logo6.png";

// product
import { Products } from "../data/Products";
import Default from "../helpers/DefaultProduct";
import FilterLatest from "../helpers/LatestProduct";
import FilterBestSeller from "../helpers/BestSellerProduct";

function MenuGallery() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);

  const [showProducts, setProducts] = useState();
  const [btnFeatured, setbtnFeatured] = useState("active");
  const [btnLatest, setbtnLatest] = useState("");
  const [btnBest, setbtnBest] = useState("");

  const imgHover = () => {
    setHovering(!isHovering);
  };
  const imgUnHover = () => {
    setHovering(false);
  };

  const imgHover2 = () => {
    setHovering2(!isHovering2);
  };
  const imgUnHover2 = () => {
    setHovering2(false);
  };

  const imgHover3 = () => {
    setHovering3(!isHovering3);
  };
  const imgUnHover3 = () => {
    setHovering3(false);
  };

  return (
    <>
      <div className="wrapper">
        {/* Services card */}
        <div className="service-wrapper">
          <div className="card">
            <div className="card-img">
              <img src={Airplane} />
            </div>
            <div className="card-text">
              <h4>Free Shipping World Wide</h4>
              <p>On order over $150</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              {" "}
              <img src={Wallet} />
            </div>
            <div className="card-text">
              <h4>Cash on delivery</h4>
              <p>100% money back guarantee</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              {" "}
              <img src={Giftbox} />
            </div>
            <div className="card-text">
              <h4>special gift card</h4>
              <p>Offer special bonuses with gift</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              {" "}
              <img src={Headphone} />
            </div>
            <div className="card-text">
              <h4>24/7 customer service</h4>
              <p>Call us 24/7 at 929-273-373</p>
            </div>
          </div>
        </div>
        {/* end of services card */}

        {/* Top Categories */}
        <div className="top-categories">
          <h2 className="Categorytext">Top Categories</h2>
          <div className="categories-img-wrapper">
            <div
              className="category-img"
              onMouseEnter={imgHover}
              onMouseLeave={imgUnHover}
            >
              <img src={Mocha} />
              <div
                className="img-overlay"
                id={isHovering ? "showOverlay" : "hideOverlay"}
              >
                <h2>Coffee Mocha</h2>
                <div className="line"></div>
                <p>View More</p>
              </div>
            </div>
            {/* end of first image */}

            <div
              className="category-img"
              onMouseEnter={imgHover2}
              onMouseLeave={imgUnHover2}
            >
              <img src={Expresso} />
              <div
                className="img-overlay"
                id={isHovering2 ? "showOverlay" : "hideOverlay"}
                s
              >
                <h2>Expresso Americano</h2>
                <div className="line"></div>
                <p>View More</p>
              </div>
            </div>
            {/* end of second image */}

            <div
              className="category-img"
              onMouseEnter={imgHover3}
              onMouseLeave={imgUnHover3}
            >
              <img src={Cappuccino} />
              <div
                className="img-overlay"
                id={isHovering3 ? "showOverlay" : "hideOverlay"}
              >
                <h2>Cappuccino</h2>
                <div className="line"></div>
                <p>View More</p>
              </div>
            </div>
          </div>
        </div>
        {/* End of category */}

        {/* Top Products */}
        <div className="top-products-wrapper">
          <h2 className="productText">Top Products</h2>
          <div className="btns">
            <button
              onClick={(displayProducts) => {
                setProducts(Default);

                const btnId = "active";

                setbtnFeatured(btnId);
                setbtnLatest(null);
                setbtnBest(null);
              }}
              id={btnFeatured}
            >
              Featured
            </button>
            <button
              onClick={(displayProducts) => {
                setProducts(FilterLatest);

                const btnId = "active";

                setbtnLatest(btnId);
                setbtnFeatured(null);
                setbtnBest(null);
              }}
              id={btnLatest}
            >
              Latest
            </button>
            <button
              onClick={(displayProducts) => {
                setProducts(FilterBestSeller);

                const btnId = "active";

                setbtnBest(btnId);
                setbtnLatest(null);
                setbtnFeatured(null);
              }}
              id={btnBest}
            >
              Bestseller
            </button>
          </div>
          <div className="prod-display">
            {/* display the products */}
            {showProducts || Default}
          </div>
        </div>

        {/* Coffee GAllery Images */}
        <div className="gallery">
          <div className="gallery-wrapper">
            <div className="image-wrap">
              <img src={Gallley1} />
              <div className="gallery-overlay"></div>
            </div>
          </div>
          {/* end of image */}
          <div className="gallery-wrapper">
            <div className="image-wrap" id="max">
              <img src={Gallley4} id="max" />
              <div className="gallery-overlay"></div>
            </div>
          </div>
          {/* end of image */}
          <div className="gallery-wrapper">
            <div className="image-wrap">
              <img src={Gallley3} />
              <div className="gallery-overlay"></div>
            </div>
          </div>
          {/* end of image */}
          <div className="gallery-wrapper">
            <div className="image-wrap">
              <img src={Gallley2} />
              <div className="gallery-overlay"></div>
            </div>
          </div>
          {/* end of image */}
          <div className="gallery-wrapper">
            <div className="image-wrap">
              <img src={Gallley5} />
              <div className="gallery-overlay"></div>
            </div>
          </div>
          {/* end of images */}
        </div>
        {/* End of Coffee Gallery */}

        {/* Special Products */}
        <div className="special-prod-wrapper">
          <h2>Special Products</h2>

          <div className="special-display">
            {/* start of product card */}
            <div className="special-card">
              <div className="discount">
                <p>-20%</p>
              </div>
              <div className="special-img">
                <img src={SpecialProd} />
              </div>
              <div className="special-prod-info">
                <div className="special-upper-info">
                  <p>★★★★★</p>
                  <h4>Irish Coffee</h4>
                </div>
                <div className="special-bottom-info">
                  <button>
                    <RiShoppingBasketLine id="basket" />
                  </button>
                  <div className="price-wrap">
                    <p>$98.00</p>
                    <p>$20.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of product card */}
            {/* start of product card */}
            <div className="special-card">
              <div className="discount">
                <p>-20%</p>
              </div>
              <div className="special-img">
                <img src={SpecialProd} />
              </div>
              <div className="special-prod-info">
                <div className="special-upper-info">
                  <p>★★★★★</p>
                  <h4>Irish Coffee</h4>
                </div>
                <div className="special-bottom-info">
                  <button>
                    <RiShoppingBasketLine id="basket" />
                  </button>
                  <div className="price-wrap">
                    <p>$98.00</p>
                    <p>$20.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of product card */}
            {/* start of product card */}
            <div className="special-card">
              <div className="discount">
                <p>-20%</p>
              </div>
              <div className="special-img">
                <img src={SpecialProd} />
              </div>
              <div className="special-prod-info">
                <div className="special-upper-info">
                  <p>★★★★★</p>
                  <h4>Irish Coffee</h4>
                </div>
                <div className="special-bottom-info">
                  <button>
                    <RiShoppingBasketLine id="basket" />
                  </button>
                  <div className="price-wrap">
                    <p>$98.00</p>
                    <p>$20.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of product card */}
            {/* start of product card */}
            <div className="special-card">
              <div className="discount">
                <p>-20%</p>
              </div>
              <div className="special-img">
                <img src={SpecialProd} />
              </div>
              <div className="special-prod-info">
                <div className="special-upper-info">
                  <p>★★★★★</p>
                  <h4>Irish Coffee</h4>
                </div>
                <div className="special-bottom-info">
                  <button>
                    <RiShoppingBasketLine id="basket" />
                  </button>
                  <div className="price-wrap">
                    <p>$98.00</p>
                    <p>$20.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end of product card */}
          </div>
        </div>
        {/* End Of Special products */}

        {/* Blogs */}
        <div className="blog-wrapper">
          <h2>Latest Blogs</h2>
          <div className="blog-card-wrap">
            {/* Start of one blog Card */}
            <div className="blog-card">
              <img src={BlogImg} />
              <div className="blog-text">
                <header>
                  <h3>Best Date Place </h3>
                  <p>December 25, 2022</p>
                </header>
                <article>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis quod quisquam enim, illo, eos quam iusto esse harum
                  dolorum iure culpa dicta explicabo quaerat utdicta explicabo
                  quaerat utdicta explicabo quaerat ut
                </article>
              </div>
              <button>Read More</button>
            </div>
            {/* End of one card */}
            {/* Start of one blog Card */}
            <div className="blog-card">
              <img src={BlogImg} />
              <div className="blog-text">
                <header>
                  <h3>Best Date Place </h3>
                  <p>December 25, 2022</p>
                </header>
                <article>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis quod quisquam enim, illo, eos quam iusto esse harum
                  dolorum iure culpa dicta explicabo quaerat utdicta explicabo
                  quaerat utdicta explicabo quaerat ut
                </article>
              </div>
              <button>Read More</button>
            </div>
            {/* End of one card */}
            {/* Start of one blog Card */}
            <div className="blog-card">
              <img src={BlogImg} />
              <div className="blog-text">
                <header>
                  <h3>Best Date Place </h3>
                  <p>December 25, 2022</p>
                </header>
                <article>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis quod quisquam enim, illo, eos quam iusto esse harum
                  dolorum iure culpa dicta explicabo quaerat utdicta explicabo
                  quaerat utdicta explicabo quaerat ut
                </article>
              </div>
              <button>Read More</button>
            </div>
            {/* End of one card */}
          </div>
        </div>
        {/* End of Blog */}

        {/* Brand Logos */}
        <div className="logos-wrapper">
          <div className="logos-img-wrap">
            <div className="logo">
              <img src={Logo1} />
            </div>
            <div className="logo">
              <img src={Logo2} />
            </div>
            <div className="logo">
              <img src={Logo4} />
            </div>
            <div className="logo">
              <img src={Logo3} />
            </div>
            <div className="logo">
              <img src={Logo5} />
            </div>
            <div className="logo">
              <img src={Logo6} />
            </div>
          </div>
        </div>
        {/* End of brand logos */}
      </div>
    </>
  );
}

export default MenuGallery;
