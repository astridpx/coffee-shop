import React from "react";
import { Products } from "../data/Products";
import { RiShoppingBasketLine } from "react-icons/ri";

const FilterLatest = Products.filter(
  (prods) => prods.category === "Latest"
).map((prod) => {
  return (
    <div className="prod-card" key={prod.id}>
      <div className="imgProd">
        <img src={prod.img} />
      </div>
      <div className="prod-info">
        <div className="upper-info">
          <p>{prod.rate}</p>
          <h4>{prod.title}</h4>
        </div>
        <div className="bottom-info">
          <button>
            <RiShoppingBasketLine id="basket" />
          </button>
          <p>₱ {prod.price}</p>
        </div>
      </div>
    </div>
  );
});

export default FilterLatest;
