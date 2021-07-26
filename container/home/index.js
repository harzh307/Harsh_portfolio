import ReactRotatingText from 'react-rotating-text';
import Head from 'next/head';
// import Button from '../../component/Button';
// import Navigation from '../../component/Navigation';
// import PortText from '../../component/PortText';
import useMarkdown from '../../hooks/useMarkdown';

const Home = ({ data }) => {
  const { HTML } = useMarkdown(data.description);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section id="Home" className="banner">
        <div className="containerH">
          <ReactRotatingText
            items={data.BannerSkills.map(x => x.bannerSkills)}
            className="rotating"
            style={{ color: 'white' }}
          />
          <span dangerouslySetInnerHTML={{ __html: HTML }} className="caption" />
          {/* <PortText variant="portHeaderHomeText" className="header">
            Hi! I'm Harsh
            <br /> Patel.
          </PortText>
          <PortText variant="portHeaderCaption" className="desc">
            Creative Designer and Developer located in New York.
            <br />
            Specialized in
            <span
              className="txt-rotate"
              data-period="2000"
              data-rotate='[ "Creating Websites.", "Designing Logo.", " Designing UI/UX."]'
            />
          </PortText> */}
          <a className="arrow" href="#About">
            <img src="/svg/scroll-down.svg" height="32px" alt="" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
