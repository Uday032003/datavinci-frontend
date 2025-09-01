import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import { PiBagSimple } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";

import "./index.css";
import CartContext from "../../context/CartContext";

const Header = () => {
  const { cartItemsList } = useContext(CartContext);
  return (
    <div className="header-container">
      <FaBars className="header-bar-icon" />
      <span className="border-span">WHICH MANUKA IS FOR ME?</span>
      <span className="header-span">Shop</span>
      <span className="header-span">Explore</span>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560370/New_Zealand_Honey_Co._hslswe.png"
          alt="logo"
          className="header-logo"
        />
      </Link>
      <span className="header-span">About</span>
      <span className="header-span">Rewards</span>
      <span className="header-span">Contact</span>
      <div className="header-icons-container">
        <AiOutlineUser className="header-icon" />
        <GrSearch className="header-icon" />
        <Link to="/cart">
          <PiBagSimple className="header-icon" />
        </Link>
        <Link to="/cart" className="link-popup">
          <span className="haeder-popup-span">{cartItemsList.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
