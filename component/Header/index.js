import styles from './Header.module.scss';
import PortText from '../PortText';

const Header = ({ children }) => (
  <div className={styles.portScrollNavbar}>
    {/* <div id="NavBarScroll" className={styles.top}>
      <PortText variant="portTestimonialText">
        <a href="/">Harsh</a>
      </PortText>
      <span className={styles.spanNav}>
        <a className={styles.portNavText} href="javascript:history.go(-1)">
          Back
        </a>
      </span>
    </div> */}
    <div className={styles.headerCenter}>{children}</div>
  </div>
);

export default Header;
