import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import Logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/ ">
						<div className="logo">
							<img src={Logo} alt="" />
							</div>
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Whitepaper</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Dashboard</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Chart</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
