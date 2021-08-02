/* eslint-disable jsx-a11y/alt-text */
// import Image from 'next/image';
import { Image, Placeholder, Transformation } from 'cloudinary-react';
import useMarkdown from '../../hooks/useMarkdown';
import Icon from '../../component/Icon';
import Button from '../../component/Button';

const About = ({ data }) => {
  const { HTML } = useMarkdown(data?.biography);
  return (
    <section id="About" className="portAbtMain">
      <picture className="abtImage">
        <Image
          cloudName="djygt08th"
          publicId={data?.portfolioImage?.formats?.medium?.provider_metadata?.public_id}
          alt="Harsh Patel">
          <Transformation quality="auto" gravity="south" crop="fill" />
          <Placeholder type="blur" />
        </Image>
      </picture>
      <article className="portTextDiv">
        <div dangerouslySetInnerHTML={{ __html: HTML }} />
        <div className="portSocial">
          {data?.socialLinks?.map(x => (
            <Icon key={x.id} socialLink={x} variant="iconBtn" />
          ))}
        </div>
        <a download={data?.resume?.url} href="/Harsh_Patel_Resume.pdf">
          <Button>{data?.downloadCVText}</Button>
        </a>
      </article>
    </section>
  );
};

export default About;
