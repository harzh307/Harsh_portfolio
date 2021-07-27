import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../../component/Button';
import Card from '../../component/Card';
import PortText from '../../component/PortText';
import Search from '../../public/svg/search.svg';

const Portfolio = ({ data }) => {
  const router = useRouter();
  const projectData = [...data?.projects?.slice(0, 2)];
  function liClicked() {
    const item = document.querySelector('listItems');
    // x.classList.add('selItem');
  }
  return (
    <section id="Work" className="center">
      <div className="portfolio">
        <div className="row">
          <div className="textAlign">
            <PortText variant="portHeadingCaption" component="h4">
              {data.header.title}
            </PortText>
            <PortText variant="portHeaderTextPCard">{data.header.caption}</PortText>
          </div>
          {/* <div className="pFilter">
            <ul>
              <li>All</li>
              <li>Web Design</li>
              <li>Application</li>
              <li>Development</li>
            </ul>
          </div> */}
        </div>

        <div className="item">
          {projectData?.map(x => (
            <Card key={x.id} variant="cardPort">
              <div className="relativeP">
                <Link prefetch={false} target="_blank" href={`work/${x?.id}`}>
                  <a
                    target="_blank"
                    onMouseEnter={() => {
                      router.prefetch(`work/${x?.id}`);
                      console.log(`prefetching ${x?.id}`);
                    }}>
                    <Image
                      src={x?.displayImage?.formats?.small?.url}
                      height={500}
                      width={475}
                      alt="projects"
                    />
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
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="align">
          <a
            onMouseEnter={() => {
              router.prefetch('/portfolio');
              console.log('prefetching portfoliopage');
            }}
            href="/portfolio"
            target="_blank">
            <Button aria-label="view more">View More</Button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
