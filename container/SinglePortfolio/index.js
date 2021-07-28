import { useRouter } from 'next/router';
import { Fragment } from 'react';
// import { useCallback, useEffect, useRef } from 'react';
import Button from '../../component/Button';
import Header from '../../component/Header';
import PortText from '../../component/PortText';
// import'from''./portfolio.scss';

const Project = ({ data }) => {
  const router = useRouter();
  // const imgRef = useRef(null);
  // const intervalRef = useRef();
  // const cardRef = useRef();

  // const startScroll = useCallback(() => {
  //   intervalRef.current = setInterval(() => {
  //     const total = imgRef.current.scrollLeft + imgRef.current.offsetWidth;
  //     if (Math.round(total) === imgRef.current.scrollWidth) {
  //       imgRef.current.scrollLeft = 0;
  //     } else {
  //       imgRef.current.scrollLeft += cardWidth;
  //     }
  //   }, 3000);
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
          <div className="imgdiv">
            {/* <img src="../../WhatsApp Image 2021-06-18 at 12.25.39.jpeg" alt="project" />
            <img src="../../WhatsApp Image 2021-06-18 at 12.25.39.jpeg" alt="project" />
            <img src="../../WhatsApp Image 2021-06-18 at 12.25.39.jpeg" alt="project" />
            <img src="../../WhatsApp Image 2021-06-18 at 12.25.39.jpeg" alt="project" />
            <img src="../../WhatsApp Image 2021-06-18 at 12.25.39.jpeg" alt="project" />
            <img src="../../WhatsApp Image 2021-06-18 at 12.25.39.jpeg" alt="project" />
            <img src="../../WhatsApp Image 2021-06-18 at 12.25.39.jpeg" alt="project" /> */}
            {data?.media?.map(x => (
              <img src={x?.url} className="img" alt="projects" />
            ))}
          </div>
          <div className="textDiv">
            <div>
              <PortText variant="portHeadingText" className="portHeadingText">
                {data?.title}
              </PortText>
            </div>
            <div className="content">
              <h3 className="head">Role</h3>
              <p className="detail">{data?.role}</p>
              <h3 className="head">Project Category</h3>
              {data?.category?.map(y => (
                <p className="detail">{y?.title}</p>
              ))}
              <h3 className="head">Technologies Used</h3>
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
