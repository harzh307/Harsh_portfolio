import Header from '../../component/Header';
import PortText from '../../component/PortText';
// import Contact from '../../container/Contact';
import usePortfolio from '../../hooks/usePortfolio';

const Project = () => {
  const { data: portfolioData } = usePortfolio();
  return (
    <>
      <div className="light_theme">
        <Header>
          <PortText variant="portSingleBlog" className="portSingleBlog">
            Project Details
          </PortText>
          <a className="backAlign" href="/PortfolioPage">
            Back
          </a>
        </Header>
        <div className="mainDiv">
          {portfolioData?.projects?.map(x => (
            <>
              <div className="singleImg">
                <img src={x.displayImage?.formats?.small?.url} className="sImg" alt="" />
              </div>
              <div className="textDiv">
                <div>
                  <PortText variant="portHeadingText" className="portHeadingText">
                    {x?.title}
                  </PortText>
                </div>
                <div className="content">
                  <h3 className="head">Role</h3>
                  <p className="detail">{x?.role}</p>
                  <h3 className="head">Project Categories</h3>
                  {x?.category?.map(y => (
                    <p className="detail">{y?.title}</p>
                  ))}
                  {x?.technologyUsed?.map(y => (
                    <>
                      <h3 className="head">Technology Used</h3>
                      <p className="detail">{y?.title}</p>
                    </>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>

        {/* <Contact /> */}
      </div>
    </>
  );
};

export default Project;
