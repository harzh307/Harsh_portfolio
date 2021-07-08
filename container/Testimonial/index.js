// import Slider from 'react-slick';
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

const Testimonial = ({ data }) => (
  <section className="testimonial">
    <div className="testimonialContainer">
      <figure className="slider">
        {data.map(x => (
          <div key={x.id} className="containerTest">
            <div className="authorImg">
              <img src="/about.jpg" alt="" />
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

export default Testimonial;
