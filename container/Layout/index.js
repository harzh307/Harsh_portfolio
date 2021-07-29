import PropTypes from 'prop-types';
// import Meta from './meta';
// import Loading from './Loading';
import Navigation from '../../component/Navigation';
import useAbout from '../../hooks/useAbout';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const { data: aboutData } = useAbout();
  return (
    <div className="light-theme">
      <Navigation />
      <main>{children}</main>
      {aboutData && <Footer data={aboutData} />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
