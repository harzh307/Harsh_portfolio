import Footer from '../../container/Footer';
import Navigation from '../Navigation';

const Layout = ({ children }) => (
  <div>
    {/* <Navigation /> */}
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
