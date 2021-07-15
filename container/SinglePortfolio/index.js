import Header from '../../component/Header';
import PortText from '../../component/PortText';
// import Contact from '../../container/Contact';
import usePortfolio from '../../hooks/usePortfolio';

const Project = ({ data }) => (
  // const { data: portfolioData } = usePortfolio();
  <>
    <div className="light_theme">
      <Header>
        <PortText variant="portSingleBlog" className="portSingleBlog">
          Project Details
        </PortText>
        <a className="backAlign" href="/portfolio">
          Back
        </a>
      </Header>
      <div className="mainDiv">
        <div>
          <div className="singleImg">
            <img src={data?.displayImage?.formats?.small?.url} className="sImg" alt="" />
          </div>
          <div className="textDiv">
            <div>
              <PortText variant="portHeadingText" className="portHeadingText">
                {data?.title}
              </PortText>
            </div>
            <div className="content">
              <h3 className="head">Role</h3>
              <p className="detail">{data?.role}</p>
              <h3 className="head">Project Categories</h3>
              {data?.category?.map(y => (
                <p className="detail">{y?.title}</p>
              ))}
              {data?.technologyUsed?.map(y => (
                <>
                  <h3 className="head">Technology Used</h3>
                  <p className="detail">{y?.title}</p>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <Contact /> */}
    </div>
  </>
);
export default Project;
