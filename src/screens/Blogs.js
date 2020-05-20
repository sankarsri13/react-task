import React from "react";
import styles from "./blogStyle.module.css";
const Blogs = () => {
  return (
    // <div className={styles.main}>
    //   <div className={styles.main2}>
    //     <div className={`${styles.img_cont1} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //     <div className={`${styles.img_cont2} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //     <div className={`${styles.img_cont3} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //     <div className={`${styles.img_cont4} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //     <div className={`${styles.img_cont5} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //     <div className={`${styles.img_cont6} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //     <div className={`${styles.img_cont7} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //     <div className={`${styles.img_cont8} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //     <div className={`${styles.img_cont9} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //     <div className={`${styles.img_cont10} ${styles.box}`}>
    //       <img src={require("../assets/path.png")} />
    //     </div>
    //   </div>
    // </div>
    <div className={styles.overall}>
      <div className={styles.top_text}>
        <p className={styles.h}>Eos tation eripuit voluptua</p>
        <p>
          Eos tation eripuit voluptua Ubique iudicabit aliquando ex vix. Sea
          vidit mucius ei, his cu nihil legendos. Per nonumes posidonium ex. Vel
          possim contentiones no, qui te singulis laboramus dissentiunt. Ea vix
          sanctus ullamcorper.
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <img src={require("../assets/g1.png")} alt="" />
          <img src={require("../assets/g5.png")} alt="" />
          <img src={require("../assets/g9.png")} alt="" />
        </div>
        <div className={styles.column}>
          <img src={require("../assets/g2.png")} alt="" />
          <img src={require("../assets/g6.png")} alt="" />
          <img src={require("../assets/g8.png")} alt="" />
        </div>
        <div className={styles.column}>
          <img src={require("../assets/g3.png")} alt="" />
          <img src={require("../assets/g9.png")} alt="" />
        </div>
        <div className={styles.column}>
          <img src={require("../assets/g4.png")} alt="" />
          <img src={require("../assets/g10.png")} alt="" />
        </div>
      </div>
      <div className={styles.top_text2}>
        <p className={styles.h}>Eos tation eripuit voluptua</p>
        <p>
          Eos tation eripuit voluptua Ubique iudicabit aliquando ex vix. Sea
          vidit mucius ei, his cu nihil legendos. Per nonumes posidonium ex. Vel
          possim contentiones no, qui te singulis laboramus dissentiunt. Ea vix
          sanctus ullamcorper.
        </p>
      </div>
      <div className={styles.bottom_blog}>
        <img src={require("../assets/comp.png")} alt="" />
        <img src={require("../assets/comp.png")} alt="" />
        <img src={require("../assets/comp.png")} alt="" />
        <img src={require("../assets/comp.png")} alt="" />
        <img src={require("../assets/comp.png")} alt="" />
        <img src={require("../assets/comp.png")} alt="" />
      </div>
    </div>
  );
};

export default Blogs;
