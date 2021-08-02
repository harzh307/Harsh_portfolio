// import Slider from 'react-slick';
import Image from 'next/image';
import PortText from '../../component/PortText';

// const settings = {
//   dots: true,
//   speed: 2000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   pauseOnHover: true,
//   autoplay: true,
//   arrows: false,
//   appendDots: dots => <ul> {dots} </ul>,
//   customPaging: i => <div className="slickDotsUp" />,
// };

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
          {/* <div className="containerTest">
          <div className="authorImg">
            <img src="/image/testimonial/img-1.jpg" alt="" />
          </div>
          <PortText variant="portTestimonialText">Mr Raj Patel</PortText>
          <PortText variant="portTestimonialRoleText">Manager</PortText>
          <PortText variant="portTestimonialPText" className="description">
            Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe
            asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum
            autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In
            similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus
            quas!
          </PortText>
        </div>
        <div className="containerTest">
          <div className="authorImg">
            <img src="/image/testimonial/img-1.jpg" alt="" />
          </div>
          <PortText variant="portTestimonialText">Mr Harsh Patel</PortText>
          <PortText variant="portTestimonialRoleText">Manager</PortText>
          <PortText variant="portTestimonialPText" className="description">
            Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe
            asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum
            autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In
            similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus
            quas!
          </PortText>
        </div> */}
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
