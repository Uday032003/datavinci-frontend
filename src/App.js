import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import CartContext from "./context/CartContext";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [cartBundleItemsList, setCartBundleItemsList] = useState([]);

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

  const addcartBundleItem = (obj) => {
    const filteredList = cartBundleItemsList.filter((i) => i.id === obj.id);
    if (filteredList.length === 1) {
      setCartBundleItemsList(
        cartBundleItemsList.map((i) => ({
          ...i,
          umf20plusSize: obj.umf20plusSize,
          umf24plusSize: obj.umf20plusSize,
          bundleDiscountPrice: obj.bundleDiscountPrice,
        }))
      );
    } else {
      setCartBundleItemsList([...cartBundleItemsList, obj]);
    }
  };

  const removeItem = (id) => {
    setCartItemsList(cartItemsList.filter((i) => i.id !== id));
    setCartBundleItemsList(cartBundleItemsList.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItemsList,
        addCartItems,
        changeCartItems,
        cartBundleItemsList,
        addcartBundleItem,
        removeItem,
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
