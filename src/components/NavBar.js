import React from "react";
import compass from "../assets/compass.png";
import fone from "../assets/fone.png";
import mail from "../assets/mail.png";
import "./style.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <div className="logo-main">
          <img src={compass} alt="logo" className="logo-img" />
          <p className="logo-heading">YOUR LOGO</p>
        </div>
        <img src={fone} alt="logo" className="fone" />
        <img src={mail} alt="logo" className="mail" />
      </div>
      <div className="menus">
        <p>HOME</p>
        <p>ABOUT US</p>
        <p>CITY GUIDE</p>
        <p>BLOGS</p>
        <p>CONTACT US</p>
      </div>
    </div>
  );
};
export default NavBar;
