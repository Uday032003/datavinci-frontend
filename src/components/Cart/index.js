import { useContext } from "react";
import { MdDelete } from "react-icons/md";

import "./index.css";
import Header from "../Header";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const { cartItemsList, changeCartItems, cartBundleItemsList, removeItem } =
    useContext(CartContext);
  let totalPrice = 0;
  cartItemsList.forEach(
    (i) => (totalPrice = totalPrice + i.price * i.quantity)
  );
  cartBundleItemsList.forEach(
    (i) => (totalPrice = totalPrice + i.bundleDiscountPrice)
  );

  return (
    <>
      <Header />
      <div className="cart-container">
        {cartItemsList.length + cartBundleItemsList.length === 0 && (
          <p className="cart-empty">No items in the cart</p>
        )}
        <ul className="cart-list-container">
          {cartItemsList.map((i) => (
            <li key={i.id} className="cart-list-item-container">
              <div className="cart-connt">
                <div className="cart-connt-img-cont">
                  <img
                    className="cart-connt-img"
                    alt="cart-image"
                    src={i.imageUrl}
                  />
                </div>
                <p className="cart-connt-text">{i.size}g | 4.4oz</p>
              </div>
              <div className="cart-quantity-cont">
                <button
                  type="button"
                  className="cart-dec-inc-btn"
                  onClick={() =>
                    changeCartItems({
                      id: i.id,
                      quantity: i.quantity,
                      clicked: "-",
                    })
                  }
                >
                  -
                </button>
                <span className="quantity-num">{i.quantity}</span>
                <button
                  type="button"
                  className="cart-dec-inc-btn"
                  onClick={() =>
                    changeCartItems({
                      id: i.id,
                      quantity: i.quantity,
                      clicked: "+",
                    })
                  }
                >
                  +
                </button>
              </div>
              <p className="cart-price-text">
                {i.size}g x {i.quantity} <br />{" "}
                <span className="cart-size-span">{i.size * i.quantity}g</span>
              </p>
              <p className="cart-price-text">
                ${i.price.toFixed(2)} x {i.quantity} <br />
                <span className="cart-price-span">
                  ${(i.price * i.quantity).toFixed(2)}
                </span>
              </p>
              <MdDelete
                className="cart-delete-icon"
                onClick={() => removeItem(i.id)}
              />
            </li>
          ))}
        </ul>
        <ul className="cart-list-container">
          {cartBundleItemsList.map((i) => (
            <li key={i.id} className="cart-list-item-container">
              <div className="cart-bundle-cont">
                <div className="cart-connt">
                  <div className="cart-connt-img-cont pppp">
                    <img
                      className="cart-connt-img"
                      alt="cart-image"
                      src={i.imageUrl1}
                    />
                  </div>
                  <p className="cart-connt-text uuuu">
                    {i.umf20plusSize} | 4.4oz
                  </p>
                </div>
                <span className="cart-plus-icon">+</span>
                <div className="cart-connt">
                  <div className="cart-connt-img-cont pppp">
                    <img
                      className="cart-connt-img"
                      alt="cart-image"
                      src={i.imageUrl2}
                    />
                  </div>
                  <p className="cart-connt-text uuuu ">
                    {i.umf24plusSize} | 4.4oz
                  </p>
                </div>
                <span className="cart-plus-icon">+</span>
                <div className="cart-connt">
                  <div className="cart-connt-img-cont pppp">
                    <img
                      className="cart-connt-img"
                      alt="cart-image"
                      src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560457/999979079a923079d63d37a1077ca3eeb88fd930_zhiif0.png"
                    />
                  </div>
                  <p className="cart-connt-text uuuu">Wooden Spoon</p>
                </div>
              </div>
              <p className="cart-price-text oooo">
                <span className="cart-size-span">
                  {i.umf20plusSize}
                  <br /> +<br /> {i.umf24plusSize}
                </span>
              </p>
              <p className="cart-price-text">
                <span className="cart-price-span">
                  ${i.bundleDiscountPrice.toFixed(2)}
                </span>
              </p>
              <MdDelete
                className="cart-delete-icon"
                onClick={() => removeItem(i.id)}
              />
            </li>
          ))}
        </ul>
        {cartItemsList.length + cartBundleItemsList.length > 0 && (
          <p className="cart-total">
            Total Amount:{" "}
            <span className="cart-total-span">${totalPrice.toFixed(2)}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default Cart;
