import React from "react";
import styles from "./placesStyle.module.css";
const Places = () => {
  return (
    <div>
      <img
        src={require("../assets/AL2.jpg")}
        alt=""
        className={styles.arab_img}
      />
      <div>
        <div className={styles.card}>
          <div>
            <img
              src={require("../assets/2.jpg")}
              alt=""
              className={styles.img_left}
            />
          </div>
          <div className={styles.right_cont}>
            <p className={styles.head}>Eos tation eripuit voluptua</p>
            <p className={styles.tag}>
              Ubique iudicabit aliquando ex vix. Sea vidit mucius ei, his cu
              nihil legendos. Per nonumes posidonium ex. Vel possim contentiones
              no, qui te singulis laboramus dissentiunt. Ea vix sanctus
              ullamcorper.
            </p>
            <div className={styles.img_cont}>
              <img
                src={require("../assets/15.jpg")}
                alt=""
                className={styles.img_small}
              />
              <img
                src={require("../assets/12.jpg")}
                alt=""
                className={styles.img_small}
              />
              <img
                src={require("../assets/13.jpg")}
                alt=""
                className={styles.img_small}
              />
              <img
                src={require("../assets/14.jpg")}
                alt=""
                className={styles.img_small}
              />
            </div>
            <img
              src={require("../assets/rightf.png")}
              alt=""
              className={styles.img_exp}
            />
          </div>
          <div className={styles.icons}>
            <img
              src={require("../assets/gleft2.png")}
              alt=""
              className={styles.img_ico}
            />
            <img
              src={require("../assets/gright.png")}
              alt=""
              className={styles.img_ico}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
