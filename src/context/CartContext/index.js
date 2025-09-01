import React from "react";

const CartContext = React.createContext({
  cartItemsList: [],
  addCartItems: () => {},
  changeCartItems: () => {},
  cartBundleItemsList: [],
  addcartBundleItem: () => {},
  removeItem: () => {},
});

export default CartContext;
