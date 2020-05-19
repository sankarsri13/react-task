import React from "react";
import styles from "./guideStyle.module.css";
const Guide = () => {
  return (
    <div className={styles.main_cont}>
      <div className={styles.left}>
        <img
          src={require("../assets/map.png")}
          alt=""
          className={styles.left_img}
        />
      </div>

      <div className={styles.right}>
        <div className={styles.text_cont}>
          <p className={styles.title}>EOS TATION ERIPUIT VOSUPTUA</p>
          <p>
            Ubique iudicabit aliquando ex vix. Sea vidit mucius ei, his cu nihil
            legendos. Per nonumes posidonium ex. Vel possim contentiones no, qui
            te singulis laboramus dissentiunt. Ea vix sanctus ullamcorper.
          </p>
        </div>
        <div className={styles.ter_cont}>
          <img src={require("../assets/path.png")} alt="" />
          <div>
            <p className={styles.title}>
              UBIQUE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACCUSAM
            </p>
            <p>
              Ubique iudicabit aliquando ex vix. Sea vidit mucius ei, his cu
              nihil legendos.{" "}
            </p>
            <button className={styles.button}>ullamcorper</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guide;
