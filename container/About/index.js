/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
// import Button from '../../component/Button';
// import Icon from '../../component/Icon';
// import Github from '../../public/svg/logo-github.svg';
// import Linkedin from '../../public/svg/linkedin.svg';
// import Twitter from '../../public/svg/logo-twitter.svg';
// import Gmail from '../../public/svg/mail.svg';
import useMarkdown from '../../hooks/useMarkdown';
import Icon from '../../component/Icon';

const About = ({ data }) => {
  const { HTML } = useMarkdown(data?.biography);
  return (
    <section id="About" className="portAbtMain">
      <picture className="abtImage">
        <Image
          src={data?.portfolioImage?.formats?.small?.url}
          height={400}
          width={400}
          alt="Harsh Patel"
        />
      </picture>
      <article className="portTextDiv">
        <div dangerouslySetInnerHTML={{ __html: HTML }} />
        <div className="portSocial">
          {data?.socialLinks?.map(x => (
            <Icon key={x.id} socialLink={x} variant="iconBtn" />
          ))}
          {/* <a href="https://github.com/harzh307">
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
          </a> */}
        </div>
        {/* <a download={data?.resume?.url} href={data?.resume?.url}>
          <Button>{data?.downloadCVText}</Button>
        </a> */}
      </article>
    </section>
  );
};

export default About;
