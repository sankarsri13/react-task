import React from "react";
import styles from "./Image.module.css";
const ImageCard = ({ img, name }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.name1}>{name}</h3>
      <img
        alt="Image"
        src={require(`../assets/${img}.jpg`)}
        className={styles.ind_img}
        style={{ width: "250px", height: "400px" }}
      />
    </div>
  );
};

export default ImageCard;
