import ReactRotatingText from 'react-rotating-text';
import Head from 'next/head';
import Image from 'next/image';
// import Button from '../../component/Button';
// import Navigation from '../../component/Navigation';
// import PortText from '../../component/PortText';
import useMarkdown from '../../hooks/useMarkdown';

const Home = ({ data }) => {
  const { HTML } = useMarkdown(data.description);

  return (
    <>
      <Head>
        <title>Harsh Patel | Home Page</title>
      </Head>
      <section
        id="Home"
        style={{ backgroundImage: `url(${data?.bannerImage?.formats?.large?.url})` }}
        className="banner">
        <div className="containerH">
          <ReactRotatingText
            items={data.BannerSkills.map(x => x.bannerSkills)}
            className="rotating"
            style={{ color: 'white' }}
          />
          <span dangerouslySetInnerHTML={{ __html: HTML }} className="caption" />
        </div>
        <a aria-label="scroll down" className="arrow" href="#About">
          <img src="/svg/scroll-down.svg" height="32px" alt="scroll Down" />
        </a>
      </section>
    </>
  );
};

export default Home;
