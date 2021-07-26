/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
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
        </div>
        {/* <a download={data?.resume?.url} href={data?.resume?.url}>
          <Button>{data?.downloadCVText}</Button>
        </a> */}
      </article>
    </section>
  );
};

export default About;
