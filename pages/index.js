import About from '../container/About';
import Services from '../container/Services';
import Contact from '../container/Contact';
import Home from '../container/home';
import Testimonial from '../container/Testimonial';
import Portfolio from '../container/Portfolio';
// import Blog from '../container/Blog';
import Education from '../container/Education';
import useBanner from '../hooks/useBanner';
import useAbout from '../hooks/useAbout';
// import useBlog from '../hooks/useBlog';
import useServices from '../hooks/useServices';
import usePortfolio from '../hooks/usePortfolio';
import useEducationSkills from '../hooks/useEducationSkills';
import useContact from '../hooks/useContactDetails';
import useTestimonial from '../hooks/useTestimonial';
import PageLoader from '../container/PageLoader';
import Meta from '../component/meta';

export default function Main() {
  const { data: bannerData, isLoading } = useBanner();
  const { data: aboutData } = useAbout();
  const { data: serviceData } = useServices();
  const { data: portfolioData } = usePortfolio();
  const { data: educationSkillsData } = useEducationSkills();
  // const { data: blogData } = useBlog();
  const { data: testimonialData } = useTestimonial();
  const { data: contactData } = useContact();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="dark-theme">
        <Meta />
        {bannerData && <Home data={bannerData} />}
        {aboutData && <About data={aboutData} />}
        {serviceData && <Services data={serviceData} />}
        {portfolioData && <Portfolio data={portfolioData} />}
        {educationSkillsData && <Education data={educationSkillsData} />}
        {/* {blogData && <Blog data={blogData} />} */}
        {testimonialData && <Testimonial data={testimonialData} />}
        {contactData && <Contact data={contactData} />}
      </div>
    </>
  );
}
