import PortText from '../../component/PortText';
import Button from '../../component/Button';
import Code from '../../public/svg/code-working-outline.svg';
import Create from '../../public/svg/create-outline.svg';
import Laptop from '../../public/svg/laptop-outline.svg';
import Phone from '../../public/svg/phone-portrait-outline.svg';
import Rocket from '../../public/svg/rocket-outline.svg';
import Help from '../../public/svg/help-buoy.svg';
import useMarkdown from '../../hooks/useMarkdown';

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
          <Button variant="portServiceButton">
            <Laptop height={35} width={35} />
          </Button>
          <PortText variant="portServiceSubHeadingText">
            <b>{x.title}</b>
          </PortText>
          <PortText variant="portParaText" component="p">
            {x.description}
          </PortText>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
