import Header from '../../component/Header';
import PortText from '../../component/PortText';
import Contact from '../../container/Contact';

const Project = () => (
  <>
    <div className="light_theme">
      <Header>
        <PortText variant="portSingleBlog" className="portSingleBlog">
          Project Details
        </PortText>
        <a className="backAlign" href="/">
          Back
        </a>
      </Header>
      <div className="mainDiv">
        <div className="imgdiv">
          <img src="../../laptop.jpg" alt="ProjectImage" className="img" />
        </div>
        <div className="textDiv">
          <div>
            <PortText variant="portHeadingText" className="portHeadingText">
              Personal Portfolio
            </PortText>
          </div>
          <div className="content">
            <h3 className="head">Role</h3>
            <p className="detail">Lorem ipsum dolor</p>
            <h3 className="head">Project Categories</h3>
            <p className="detail">Lorem ipsum dolor</p>
            <h3 className="head">Technology Used</h3>
            <p className="detail">Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
      {/* <Contact /> */}
    </div>
  </>
);

export default Project;
