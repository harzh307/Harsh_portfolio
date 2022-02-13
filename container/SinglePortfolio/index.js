import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useRef } from 'react';
// import { useCallback, useEffect, useRef } from 'react';
import Button from '../../component/Button';
import Header from '../../component/Header';
import PortText from '../../component/PortText';
// import'from''./portfolio.scss';

const Project = ({ data }) => {
  const router = useRouter();
  const imgRef = useRef(null);
  const intervalRef = useRef();
  const cardRef = useRef([]);

  // const startScroll = useCallback(() => {
  //   intervalRef.current = setInterval(() => {
  //     const cardWidth = cardRef?.current[0]?.offsetWidth;
  //     const total = imgRef?.current?.scrollLeft + imgRef?.current?.offsetWidth;
  //     if (Math.round(total) === imgRef?.current?.scrollWidth) {
  //       imgRef.current.scrollLeft = 0;
  //     } else {
  //       imgRef.current.scrollLeft += cardWidth;
  //     }
  //   }, 2000);
  // }, []);

  // const stopScroll = useCallback(() => {
  //   clearInterval(intervalRef.current);
  // }, []);

  // useEffect(() => {
  //   startScroll();
  //   imgRef.current.addEventListener('mouseover', stopScroll);
  //   imgRef.current.addEventListener('mouseout', startScroll);
  //   return () => {
  //     imgRef.current.removeEventListener('mouseover', stopScroll);
  //     imgRef.current.removeEventListener('mouseout', startScroll);
  //   };
  // }, [startScroll, stopScroll]);
  console.warn(
    data,
    'wudouwboudcwuorco wrfowruhf woruhf owr fuowhrfo wurhf ouwhf wourfh wouf hworf hrwfo luwhf owruh orwlfh owhb',
  );

  return (
    <>
      <div className="light_theme">
        <Header>
          <PortText variant="portSingleBlog" className="portSingleBlog">
            Project Details
          </PortText>
          <button
            className="backAlign"
            type="button"
            onClick={() => {
              router.back();
            }}>
            Back
          </button>
        </Header>
        <div className="mainDiv">
          <div className="imgdiv" ref={imgRef}>
            {data?.media?.map((x, i) => (
              <img
                src={x?.url}
                key={x.id}
                ref={el => {
                  cardRef.current[i] = el;
                }}
                className="img"
                alt="projects"
              />
            ))}
          </div>
          <div className="textDiv">
            <div>
              <PortText variant="portHeadingText" className="portHeadingText">
                {data?.title}
              </PortText>
              <PortText variant="portHeadingCaption">{data?.description}</PortText>
            </div>
            <div className="content">
              <PortText variant="portButtonText" className="head">
                Role
              </PortText>
              <PortText variant="portHeadingCaption" className="detail">
                {data?.role}
              </PortText>
              <PortText variant="portButtonText" className="head">
                Project Category
              </PortText>
              {data?.category?.map(y => (
                <PortText variant="portHeadingCaption" className="detail">
                  {y?.title}
                </PortText>
              ))}
              <PortText variant="portHeadingCaption" className="head">
                Technologies Used
              </PortText>
              <Fragment className="btnfrag">
                {data?.technologyUsed?.map(y => (
                  <a aria-label="technology site" role="button" href={y?.url} className="detail">
                    <Button aria-label="technology">{y?.title}</Button>
                  </a>
                ))}
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
