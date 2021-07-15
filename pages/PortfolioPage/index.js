import Link from 'next/link';
import Card from '../../component/Card';
import Header from '../../component/Header';
import PortText from '../../component/PortText';
import Search from '../../public/svg/search.svg';
import usePortfolio from '../../hooks/usePortfolio';

const PortfolioPage = () => {
  const { data: portfolioData } = usePortfolio();
  return (
    <div className="light-theme">
      <Header>
        <PortText variant="portSingleBlog">Portfolio List</PortText>
        <a className="backAlign" href="/">
          Back
        </a>
      </Header>
      <section className="portfolioList">
        <div className="pFilter">
          <ul>
            <li>All</li>
            <li>Web Design</li>
            <li>Application</li>
            <li>Development</li>
          </ul>
        </div>

        <div className="portfolioItems">
          {portfolioData?.projects?.map(x => (
            <Card variant="cardPort">
              <div className="relativeP">
                <a href={`work/${x?.id}`}>
                  <img src={x.displayImage?.formats?.small?.url} alt="" />
                  <div className="cardContent">
                    <Card variant="hoverPort">
                      <div className="hoverContext">
                        <PortText variant="portHoverCardText">{x?.title}</PortText>
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
          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-2.jpg" alt="" />
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-3.jpg" alt="" />
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-4.jpg" alt="" />
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-5.jpg" alt="" />
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-6.jpg" alt="" />
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-2.jpg" alt="" />
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-3.jpg" alt="" />
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-4.jpg" alt="" />
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-5.jpg" alt="" />
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
          </Card> */}

          {/* <Card variant="cardPort">
            <div className="relativeP">
              <a href="/Portfolio">
                <img src="/image/portfolio/img-6.jpg" alt="" />
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
          </Card> */}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
