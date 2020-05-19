import React from "react";
import styles from "./aboutStyle.module.css";
import gright from "../assets/gright.png";
import gleft2 from "../assets/gleft2.png";
import ImageCard from "../components/ImageCard";
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.main}>FUSCE DAPIBUS</p>
        <p className={styles.tag}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          asperiores temporibus voluptatem, quaerat aliquid quas.
        </p>
        <div className={styles.icons}>
          <img src={gleft2} alt="" />
          <img src={gright} alt="" />
        </div>
      </div>
      <div className="gridRight">
        <div className={styles.gridRight}>
          <ImageCard img={"1"} name="DUBAI" />
          <ImageCard img={"5"} name="ABU DHABI" />
          <ImageCard img={"2"} name="RAS AL KHAIMAH" />
          <ImageCard img={"4"} name="SHARJAH" />
        </div>
      </div>
    </div>
  );
}
