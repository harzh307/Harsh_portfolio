import PropTypes from 'prop-types';
// import Meta from './meta';
// import Loading from './Loading';
import Navigation from '../../component/Navigation';
import useAbout from '../../hooks/useAbout';
import Footer from '../Footer';
import PageLoader from '../PageLoader';

const Layout = ({ children }) => {
  const { data: aboutData } = useAbout();
  return (
    <div className="light-theme">
      {/* <Meta /> */}
      <PageLoader />
      <Navigation />
      <main>{children}</main>
      {aboutData && <Footer data={aboutData} />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
