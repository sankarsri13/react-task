import React from "react";
import styles from "./homeStyle.module.css";
import NavBar from "../components/NavBar";
import right from "../assets/right.png";
import "./main.css";
import { createBrowserHistory as history } from "history";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
const style_comp = {
  textDecoration: "none",
  color: "black",
};
export const Home = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.home}>
        <NavBar />
        <div className={styles.text_cont}>
          <p className={styles.main}>Consectetur Adipiscing Tempus</p>
          <p className={styles.tag}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod hic
            necessitatibus deleniti adipisci nisi. Cumque sed illum, minus nobis
            sunt ipsum.
          </p>
          <div className={styles.explore}>
            <p>EXPLORE</p>

            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
