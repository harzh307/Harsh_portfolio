import styles from './hover.module.scss';

export default function Home() {
  return (
    <>
      <a className={styles.portNavHover} href="">
        Home
      </a>
      <a className={styles.portNavHover} href="">
        About
      </a>
      <a className={styles.portNavHover} href="">
        Services
      </a>
      <a className={styles.portNavHover} href="">
        Works
      </a>
      <a className={styles.portNavHover} href="">
        Blog
      </a>
      <a className={styles.portNavHover} href="">
        Contact
      </a>
      <div className={styles.portImgHover} />
      <div className={styles.portWorkOpacitiy} />
    </>
  );
}
