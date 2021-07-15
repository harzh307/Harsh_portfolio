import Button from '../../component/Button';
import Card from '../../component/Card';
import PortText from '../../component/PortText';
import Search from '../../public/svg/search.svg';

const Portfolio = ({ data }) => {
  const projectData = [...data?.projects?.slice(0, 2)];
  console.log(data?.projects);
  function liClicked() {
    const item = document.querySelector('listItems');
    // x.classList.add('selItem');
  }
  return (
    <section id="Work" className="center">
      <div className="portfolio">
        <div className="row">
          <div className="textAlign">
            <PortText variant="portCardHeaderText">{data.header.title}</PortText>
            <PortText variant="portHeaderTextPCard">{data.header.caption}</PortText>
          </div>
          <div className="pFilter">
            <ul>
              <li>All</li>
              <li>Web Design</li>
              <li>Application</li>
              <li>Development</li>
            </ul>
          </div>
        </div>

        <div className="item">
          {projectData?.map(x => (
            <Card key={x.id} variant="cardPort">
              <div className="relativeP">
                <a href={`work/${x?.id}`}>
                  <img src={x.displayImage?.formats?.small?.url} alt="" />
                  <div className="cardContent">
                    <Card variant="hoverPort">
                      <div className="hoverContext">
                        <PortText variant="portHoverCardText">{x.title}</PortText>
                        <span>
                          <Search className="searchIcon" height={28} width={28} />
                        </span>
                      </div>
                    </Card>
                  </div>
                </a>
              </div>
            </Card>
          ))}
        </div>
        <div className="align">
          <a href="/PortfolioPage">
            <Button>View More</Button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
