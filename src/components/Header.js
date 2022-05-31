import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { ShoppingBasket } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header_option">
          <span className="header_optionlineOne">Hello Guest</span>
          <span className="header_optionlineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineOne">Returns</span>
          <span className="header_optionlineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineOne">You</span>
          <span className="header_optionlineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
