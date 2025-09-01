import React from "react";

const CartContext = React.createContext({
  cartItemsList: [],
  addCartItems: () => {},
  changeCartItems: () => {},
});

export default CartContext;
