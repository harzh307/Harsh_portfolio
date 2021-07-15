import About from '../container/About';
import Services from '../container/Services';
import Contact from '../container/Contact';
import Home from '../container/home';
import Testimonial from '../container/Testimonial';
import Portfolio from '../container/Portfolio';
import Blog from '../container/Blog';
import Education from '../container/Education';
import useBanner from '../hooks/useBanner';
import useAbout from '../hooks/useAbout';
import useBlog from '../hooks/useBlog';
import useServices from '../hooks/useServices';
import usePortfolio from '../hooks/usePortfolio';
import useEducationSkills from '../hooks/useEducationSkills';
import useContact from '../hooks/useContactDetails';
import useTestimonial from '../hooks/useTestimonial';

// const toggleNavbar = () => {
//   const collapseRef = useRef()
//   // e.preventDefault();
//   // collapseRef.current.classList.toggle('show');
//   const element = ;
//   if (ReactDOM.findDOMNode(element).style.display === 'none') {
//     ReactDOM.findDOMNode(element).style.display = 'flex';
//   } else {
//     ReactDOM.findDOMNode(element).style.display = 'none';
//   }
// };

export default function Main() {
  const { data: bannerData } = useBanner();
  const { data: aboutData } = useAbout();
  const { data: serviceData } = useServices();
  const { data: portfolioData } = usePortfolio();
  const { data: educationSkillsData } = useEducationSkills();
  const { data: blogData } = useBlog();
  const { data: testimonialData } = useTestimonial();
  const { data: contactData } = useContact();
  return (
    <>
      <div className="dark-theme">
        {bannerData && <Home data={bannerData} />}
        {aboutData && <About data={aboutData} />}
        {serviceData && <Services data={serviceData} />}
        {portfolioData && <Portfolio data={portfolioData} />}
        {educationSkillsData && <Education data={educationSkillsData} />}
        {blogData && <Blog data={blogData} />}
        {testimonialData && <Testimonial data={testimonialData} />}
        {contactData && <Contact data={contactData} />}
      </div>
    </>
  );
}
