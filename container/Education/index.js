import React from 'react';
import { useRouter } from 'next/router';

import Button from '../../component/Button';
import PortText from '../../component/PortText';

const Education = ({ data }) => {
  const router = useRouter();
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
        </div>
      </div>
      <div className="align">
        <a
          data
          onMouseEnter={() => {
            router.prefetch('/resume');
            console.log('prefetching resume');
          }}
          href="/resume">
          <Button aria-label="view more">View More</Button>
        </a>
      </div>
    </section>
  );
};

export default Education;
