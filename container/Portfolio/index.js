import Button from '../../component/Button';
import Card from '../../component/Card';
import PortText from '../../component/PortText';
import Search from '../../public/svg/search.svg';

const Portfolio = ({ data }) => {
  function liClicked() {
    const item = document.querySelector('listItems');
    console.log(item);
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
          {data.projects.map(x => (
            <Card key={x.id} variant="cardPort">
              <div className="relativeP">
                <a href="/PortfolioPage">
                  <img src="/image/portfolio/img-1.jpg" alt="" />
                  <div className="cardContent">
                    <Card variant="hoverPort">
                      <div className="hoverContext">
                        <PortText variant="portHoverCardText">Application</PortText>
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
