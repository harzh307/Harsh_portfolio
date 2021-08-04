import Image from 'next/image';
import PortText from '../../component/PortText';

const Testimonial = ({ data }) => {
  const imgUrl = 'https://res.cloudinary.com/djygt08th/image/upload/v1627476859/laptop_avprc1.webp';
  return (
    <section style={{ backgroundImage: `url(${imgUrl})` }} className="testimonial">
      <div className="testimonialContainer">
        <figure className="slider">
          {data.map(x => (
            <div key={x.id} className="containerTest">
              <div className="authorImg">
                <Image
                  height={96}
                  width={98}
                  src={x?.profile?.formats?.thumbnail?.url}
                  alt="testimonial"
                />
              </div>
              <PortText variant="portTestimonialText">{x.personName}</PortText>
              <PortText variant="portTestimonialRoleText">{x.jobTitle}</PortText>
              <PortText variant="portTestimonialPText" className="description">
                {x.description}
              </PortText>
            </div>
          ))}
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
