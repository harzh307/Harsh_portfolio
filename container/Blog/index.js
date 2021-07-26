import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Button from '../../component/Button';
import PortText from '../../component/PortText';

const Blog = ({ data }) => {
  const blogRef = useRef(null);
  const intervalRef = useRef();
  const cardRef = useRef([]);

  const startScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      blogRef.current.appendChild(blogRef.current.firstElementChild);
      blogRef.current.style.overFlow = 'hidden';
      const cardWidth = cardRef.current[0].offsetWidth;
      const total = blogRef.current.scrollLeft + blogRef.current.offsetWidth;
      blogRef.current.scrollLeft += cardWidth;
    }, 3000);
  }, []);

  const stopScroll = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startScroll();
    blogRef.current.addEventListener('mouseover', stopScroll);
    blogRef.current.addEventListener('mouseout', startScroll);
    return () => {
      blogRef.current.removeEventListener('mouseover', stopScroll);
      blogRef.current.removeEventListener('mouseout', startScroll);
    };
  }, [startScroll, stopScroll]);
  return (
    <section id="Blog" className="blogSpacing">
      <div className="textAlign">
        <PortText variant="portHeadingCaption">{data.Header.title}</PortText>
        <PortText variant="portHeadingText" component="h1">
          {data.Header.caption}
        </PortText>
      </div>
      <div className="cardSetBlog">
        {/* <div className='sliderShow}> */}
        <div id="sliderModal" className="sliderShow" ref={blogRef}>
          {data?.blogs?.map((x, i) => (
            <div
              key={x.id}
              className="cardBlog"
              ref={el => {
                cardRef.current[i] = el;
              }}>
              <Image
                src="../../image/blog/img-1.jpg"
                className="portImgHover"
                height="250vh"
                width="360vw"
              />
              <div className="cardPadding">
                <PortText variant="portCardHeaderText">{x.title}</PortText>
                <PortText variant="portParaText" className="breakClass">
                  {x.description}
                </PortText>
                <div className="cardSideData">
                  <a href="/singleBlog">
                    <PortText variant="portCardReadText">Read More</PortText>
                  </a>
                  <PortText variant="portCardDateText">Date Here</PortText>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="cardBlog">
          <Image
            src="/image/blog/img-3.jpg"
            className="portImgHover"
            height="250vh"
            width="360vw"
          />
          <div className="cardPadding">
            <PortText variant="portCardHeaderText">
              The best of web design and web design inspiration
            </PortText>
            <PortText variant="portParaText">
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first ...
            </PortText>
            <div className="cardSideData">
              <PortText variant="portCardReadText">Read More</PortText>
              <PortText variant="portCardDateText">Date Here</PortText>
            </div>
          </div>
        </div>
        <div className="cardBlog">
          <Image
            src="/image/blog/img-4.jpg"
            className="portImgHover"
            height="250vh"
            width="360vw"
          />
          <div className="cardPadding">
            <PortText variant="portCardHeaderText">
              The best of web design and web design inspiration
            </PortText>
            <PortText variant="portParaText">
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first ...
            </PortText>
            <div className="cardSideData">
              <a href="/singleBlog">
                <PortText variant="portCardReadText">Read More</PortText>
              </a>
              <PortText variant="portCardDateText">Date Here</PortText>
            </div>
          </div>
        </div>
        <div className="cardBlog">
          <Image
            src="/image/blog/img-1.jpg"
            className="portImgHover"
            height="250vh"
            width="360vw"
          />
          <div className="cardPadding">
            <PortText variant="portCardHeaderText">
              The best of web design and web design inspiration
            </PortText>
            <PortText variant="portParaText">
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first ...
            </PortText>
            <div className="cardSideData">
              <a href="/singleBlog">
                <PortText variant="portCardReadText">Read More</PortText>
              </a>
              <PortText variant="portCardDateText">Date Here</PortText>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <div className="textAlign">
        <a href="/BlogPage">
          <Button aria-label="view more">View More</Button>
        </a>
      </div>
    </section>
  );
};

export default Blog;
