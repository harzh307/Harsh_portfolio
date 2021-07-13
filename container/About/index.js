/* eslint-disable jsx-a11y/alt-text */
// import Image from 'next/image';
// import PortText from '../../component/PortText';
import Button from '../../component/Button';
import Github from '../../public/svg/logo-github.svg';
import Linkedin from '../../public/svg/linkedin.svg';
import Twitter from '../../public/svg/logo-twitter.svg';
import Gmail from '../../public/svg/mail.svg';
import useMarkdown from '../../hooks/useMarkdown';
// import style from './_About.scss';

const About = ({ data }) => {
  const { HTML } = useMarkdown(data.biography);
  return (
    <section id="About" className="portAbtMain">
      <picture className="abtImage">
        {/* {/* <source
        media="(min-width:1024px,min-width:768px)"
        srcSet="/image/portfolio/about-img-lg.jpg,/image/portfolio/about-img-md.jpg"
      /> */}
        {/* <source
          media="(min-width:1024px)"
          srcSet={data?.portfolioImage?.formats?.large?.url}
          type="image/jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet={data?.portfolioImage?.formats?.large?.url}
          type="image/jpg"
        /> */}
        <img src={data?.portfolioImage?.formats?.small?.url} alt="imharsh" />
      </picture>
      <div className="portTextDiv">
        <div dangerouslySetInnerHTML={{ __html: HTML }} />
        {/* <PortText variant="portHeadingText">ABOUT ME.</PortText>
        <PortText variant="portAboutCaption1">UI/UX Designer & Web Developer</PortText>
        <PortText variant="portParaAboutText">
          I'm /#F2F2F2
          <b> Harsh Patel </b>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to specimen book.
        </PortText>
        <PortText variant="portParaAboutText">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </PortText> */}
        <div className="portSocial">
          <a href="https://github.com/harzh307">
            <Button className="portSocialBtn" variant="portSocialButton">
              <Github className="btnHover" height={18} width={18} />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/Harsh-Patel/">
            <Button className="portSocialBtn" variant="portSocialButton">
              <Linkedin className="btnHover" height={18} width={18} />
            </Button>
          </a>
          <a href="https://twitter.com/patelharsh307">
            <Button className="portSocialBtn" variant="portSocialButton">
              <Twitter className="btnHover" height={18} width={18} />
            </Button>
          </a>
          <a href="mailto:harzh.patel@gmail.com">
            <Button className="portSocialBtn" variant="portSocialButton">
              <Gmail className="btnHover" height={18} width={18} />
            </Button>
          </a>
          {/* <a href="https://wa.me/+916355015269?text=Hi%20there">
            <Button className="portSocialBtn" variant="portSocialButton">
              <Whatsapp className="btnHover" height={18} width={18} />
            </Button>
          </a>
          <a href="http://instagram.com/harsh.js">
            <Button className="portSocialBtn" variant="portSocialButton">
              <Instagram className="btnHover" height={18} width={18} />
            </Button>
          </a> */}
        </div>
        <Button>Download cv</Button>
      </div>
    </section>
  );
};

export default About;
