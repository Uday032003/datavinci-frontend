import { useContext } from "react";

import "./index.css";
import Header from "../Header";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const { cartItemsList, changeCartItems } = useContext(CartContext);
  let totalPrice = 0;
  cartItemsList.forEach(
    (i) => (totalPrice = totalPrice + i.price * i.quantity)
  );

  return (
    <>
      <Header />
      <div className="cart-container">
        {cartItemsList.length === 0 && (
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
            </li>
          ))}
        </ul>
        {cartItemsList.length > 0 && (
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
