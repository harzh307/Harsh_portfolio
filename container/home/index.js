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
      {/* {/* <source
        media="(min-width:1024px,min-width:768px)"
        srcSet="/image/portfolio/about-img-lg.jpg,/image/portfolio/about-img-md.jpg"
      /> */}
      <section
        id="Home"
        style={{ backgroundImage: `url(${data?.bannerImage?.formats?.large?.url})` }}
        className="banner">
        {/* <picture className="bannerImage">
          <source
            media="(min-width:1024px)"
            srcSet={data?.bannerImage?.formats?.large}
            type="image/jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet={data?.bannerImage?.formats?.medium}
            type="image/jpg"
          />
          <source
            media="(min-width:320px)"
            srcSet={data?.bannerImage?.formats?.small}
            type="image/jpg"
          />
          <Image src={data?.bannerImage?.url} layout="fill" />
        </picture> */}
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
          <a aria-label="scroll down" className="arrow" href="#About">
            <img src="/svg/scroll-down.svg" height="32px" alt="scroll Down" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
