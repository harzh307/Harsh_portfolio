import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
import Banner from "../container/home";

const Home = () => {
  return (
    <>
      <Banner />
      <div className={styles.container}></div>
    </>
  );
};

Home.displayName = "Home";

export default Home;
