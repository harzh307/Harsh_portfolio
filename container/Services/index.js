import Image from 'next/image';
import PortText from '../../component/PortText';
import Button from '../../component/Button';
import Card from '../../component/Card';

const Services = ({ data }) => (
  // const { HTML } = useMarkdown(data.header);
  <section id="Services" className="Service">
    <div>
      {/* <div dangerouslySetInnerHTML={{ __html: HTML }} /> */}
      <PortText variant="portHeadingCaption" component="h4">
        {data.header.title}
      </PortText>
      <PortText variant="portHeadingText" component="h1">
        {data.header.caption}
      </PortText>
    </div>
    {/* 6 service cards */}

    <div className="mainbox">
      {/* r1 c1 */}
      {data.services.map(x => (
        <div key={x.id} className="box">
          <Card className="cardService" variant="serviceCard">
            <Button aria-label="icon" variant="portServiceButton">
              <Image alt="icon for card" src={x?.icon?.url} height={35} width={35} />
            </Button>
            <PortText className="topBottom" variant="portServiceSubHeadingText">
              <b>{x.title}</b>
            </PortText>
            <PortText variant="portParaText" component="p">
              {x.description}
            </PortText>
          </Card>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
