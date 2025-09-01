import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import CartContext from "./context/CartContext";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cartItemsList, setCartItemsList] = useState([]);

  const addCartItems = (obj) => {
    const filtedList = cartItemsList.filter((i) => i.id === obj.id);
    if (filtedList.length === 1) {
      setCartItemsList(
        cartItemsList.map((i) =>
          i.id === obj.id
            ? {
                ...i,
                quantity: i.quantity + obj.quantity,
              }
            : i
        )
      );
    } else {
      setCartItemsList([...cartItemsList, obj]);
    }
  };

  const changeCartItems = (obj) => {
    if (obj.clicked === "-") {
      if (obj.quantity > 1) {
        setCartItemsList(
          cartItemsList.map((i) =>
            i.id === obj.id
              ? {
                  ...i,
                  quantity: i.quantity - 1,
                }
              : i
          )
        );
      } else {
        setCartItemsList(cartItemsList.filter((i) => i.id !== obj.id));
      }
    } else {
      setCartItemsList(
        cartItemsList.map((i) =>
          i.id === obj.id
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItemsList,
        addCartItems,
        changeCartItems,
      }}
    >
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/cart" Component={Cart} />
      </Routes>
    </CartContext.Provider>
  );
};

export default App;
