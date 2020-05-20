import React from "react";
import styles from "./contactStyle.module.css";
import compass from "../assets/compass.png";
const Contact = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.top_container}>
        <div className={styles.banner}>
          <h1>FUSCE DAPIBUS</h1>
          <p>Fusce dapibus tellus ac cursus commodo tortor-mauris</p>
          <div className={styles.input_form}>
            <input type="text" name="" id="form" placeholder="tellus mauris" />
            <img src={require("../assets/email-butt.png")} />
          </div>
        </div>
        <div className={styles.footer}>
          <div style={{ maxWidth: "300px" }}>
            <div className="logo-main">
              <img src={compass} alt="logo" className="logo-img" />
              <p className="logo-heading">YOUR LOGO</p>
            </div>
            <p style={{ color: "#688095" }}>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris.{" "}
            </p>
          </div>
          <div>
            <h2 style={{ color: "#688095" }}>QUICK LINKS</h2>
            <ul style={{ color: "#AAA9A9" }}>
              <li>Home</li>
              <li>ABOUT US</li>
              <li>CITY GUIDE</li>
              <li>BLOG</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h2 style={{ color: "#688095" }}>QUICK LINKS</h2>
            <ul style={{ color: "#AAA9A9" }}>
              <li>Home</li>
              <li>ABOUT US</li>
              <li>CITY GUIDE</li>
              <li>BLOG</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div style={{ maxWidth: "300px" }}>
            <h2 style={{ color: "#688095" }}>CONTACT US</h2>
            <p style={{ color: "#AAA9A9" }}>
              Feel free to get in touch with us via phone or send us a message
            </p>
            <h4 style={{ color: "#2C4458" }}>
              +1 800 123 1234 email@website.com
            </h4>
          </div>
        </div>
      </div>
      <div className={styles.final_foot}>
        <p>Shankara Sharma.All Rights Reserved</p>
        <div className={styles.final_foot_right}>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
