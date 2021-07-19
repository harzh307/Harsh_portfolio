import React from 'react';
import Button from '../../component/Button';
import PortText from '../../component/PortText';

const Education = ({ data }) => {
  const eduData = [...data.skills.slice(3, 6)];
  return (
    <section id="Skills" className="alignment">
      <div className="textAlign">
        <PortText variant="portHeadingCaption">{data.Header?.title}</PortText>
        <PortText variant="portHeadingText" component="h1">
          {data.Header?.caption}
        </PortText>
      </div>
      <div className="leftbox">
        <aside className="leftsubbox">
          {data.educations.map(x => (
            <div key={x.id} className="leftTextAlign">
              <PortText variant="portEduLeftText">{`${x.startDate} to ${x.endDate}`}</PortText>
              <PortText className="margin" variant="portEduLeftText">
                {x.degree}
              </PortText>
              <PortText className="boldText" variant="portEduLeftText">
                {x.institute}
              </PortText>
            </div>
          ))}
          {/* <div className="leftTextAlign">
          <PortText variant="portEduLeftText">2010-2012</PortText>
          <PortText variant="portEduLeftText">Graphic Designer</PortText>
          <PortText variant="portEduLeftText">International Design Institute</PortText>
        </div>
        <div className="leftTextAlign">
          <PortText variant="portEduLeftText">2010-2012</PortText>
          <PortText variant="portEduLeftText">Graphic Designer</PortText>
          <PortText variant="portEduLeftText">International Design Institute</PortText>
        </div> */}
        </aside>
        <div className="baralign">
          {eduData.map(x => (
            <div key={x.id} className="bars">
              <PortText variant="portEduPercent" component="h1">
                {`${x.rating}%`}
              </PortText>
              <div className="block">
                <PortText variant="portHeadingCaption">{x.title}</PortText>
                <div className="bar">
                  <div style={{ width: `${x.rating}%` }} className="ht" />
                </div>
              </div>
            </div>
          ))}
          {/* <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            80%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">JAVASCRIPT</PortText>
            <div className="bar">
              <div className="ht2" />
            </div>
          </div>
        </div>
        <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            72%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">REACT</PortText>
            <div className="bar">
              <div className="ht3" />
            </div>
          </div>
        </div>
        <div className="bars">
          <PortText variant="portEduPercent" component="h1">
            85%
          </PortText>
          <div className="block">
            <PortText variant="portHeadingCaption">NEXTJS</PortText>
            <div className="bar">
              <div className="ht4" />
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <div className="align">
        <a data href="/resume">
          <Button>View More</Button>
        </a>
      </div>
      {/* <div className="viewMore">
      <a href="/skills">
        <Button variant="portHomeButton">View more</Button>
      </a>
    </div> */}
    </section>
  );
};

export default Education;
