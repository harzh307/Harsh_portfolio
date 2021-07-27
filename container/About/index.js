/* eslint-disable jsx-a11y/alt-text */
// import Image from 'next/image';
import { Image, CloudinaryContext, Placeholder, Transformation } from 'cloudinary-react';
import useMarkdown from '../../hooks/useMarkdown';
import Icon from '../../component/Icon';

const About = ({ data }) => {
  const { HTML } = useMarkdown(data?.biography);
  return (
    <section id="About" className="portAbtMain">
      <picture className="abtImage">
        <Image
          cloudName="djygt08th"
          // loading="lazy"
          publicId={data?.portfolioImage?.provider_metadata?.public_id}
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
        {/* <a download={data?.resume?.url} href={data?.resume?.url}>
          <Button>{data?.downloadCVText}</Button>
        </a> */}
      </article>
    </section>
  );
};

export default About;
