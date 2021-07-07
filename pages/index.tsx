import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
        <div>Loading...</div>
      <div className={styles.container}></div>
    </>
  );
};

Home.displayName = "Home";

export default Home;
