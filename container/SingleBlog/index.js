import Header from '../../component/Header';
// import Contact from '../../container/Contact';
import PortText from '../../component/PortText';
// import useContact from '../../hooks/useContactDetails';

const SingleBlog = () => (
  // const { data: contactData } = useContact();
  <div className="light-theme">
    <Header>
      <PortText variant="portSingleBlog">Single Blog</PortText>
      <a className="backAlign" aria-label="back" href="/blogpage">
        Back
      </a>
    </Header>
    <div className="mainDiv">
      <div className="imgdiv">
        <img src="/image/blog/img-6.jpg" alt="this is main" className="img" />
      </div>
      <div className="textDiv">
        <div>
          <PortText variant="portHeadingText">Why Blogging is so Amazing & Important?</PortText>
          <PortText variant="portFilterText">1 April 2018 by Harsh Patel.</PortText>
        </div>
        <div className="content">
          <PortText variant="portEduLeftText">
            Since the beginning of the internet, millions and millions and millions of blogs have
            been created. Many have died due to lost interest or their owners giving up on the idea,
            while others have thrived and continue to grow, making money and earning their owners a
            steady income. It’s a constant evolution of content that keeps people coming back for
            more, especially if these blogs contact highly resourceful material that people find
            useful and interesting.
          </PortText>
          <PortText variant="portEduLeftText">
            Each example listed in this blog post are all different in some way and all bring
            something unique to their readers & subscribers. I want to show you what is possible and
            how you can take inspiration from them and create an awesome blog of your own.
          </PortText>
          <PortText variant="portEduLeftText">
            A very well designed and slick blog that’s all about being your own boss and creating
            your own wealth. It’s a blog with a very active podcast feed. Their podcasts are
            insanely popular on itunes, and no doubt they make a fair bit of money from selling ad
            space on those podcasts. Podcasts is something to think about when creating your blog as
            it could be a great monetization tool.
          </PortText>
          <PortText variant="portEduLeftText">
            A very well designed and slick blog that’s all about being your own boss and creating
            your own wealth. It’s a blog with a very active podcast feed. Their podcasts are
            insanely popular on itunes, and no doubt they make a fair bit of money from selling ad
            space on those podcasts. Podcasts is something to think about when creating your blog as
            it could be a great monetization tool.
          </PortText>
        </div>
        <div className="cmtmain">
          <div className="title">
            <PortText variant="portCommentText">Post Comments</PortText>
          </div>
          <div>
            <div className="commentImg">
              <img src="/image/portfolio/img-6.jpg" alt="" className="Cmtimg" />
              <div className="nameContent">
                <div className="reply">
                  <PortText variant="portHeadingCaption">Jane Doe</PortText>
                  <PortText variant="portHeadingCaption">
                    <a aria-label="reply" href="/Singleblog">
                      Reply
                    </a>
                  </PortText>
                </div>
                <PortText variant="portCardDateText">May 1, 2018 at 14:35</PortText>
                <PortText variant="portCommentdetailText">
                  Elit repudiandae impedit obcaecati qui dignissimos Laborum eos eveniet ratione
                  possimus earum Corrupti temporibus at hyid.
                </PortText>
              </div>
            </div>
            <div className="line" />
          </div>
          <div>
            <div className="commentImg">
              <img src="/image/portfolio/img-6.jpg" alt="" className="Cmtimg" />
              <div className="nameContent">
                <div className="reply">
                  <PortText variant="portHeadingCaption">Jane Doe</PortText>
                  <PortText variant="portHeadingCaption">
                    <a aria-label="reply" href="/Singleblog">Reply</a>
                  </PortText>
                </div>
                <PortText variant="portCardDateText">May 1, 2018 at 14:35</PortText>
                <PortText variant="portCommentdetailText">
                  Elit repudiandae impedit obcaecati qui dignissimos Laborum eos eveniet ratione
                  possimus earum Corrupti temporibus at hyid.
                </PortText>
              </div>
            </div>
            <div className="line" />
          </div>
          <div>
            <div className="commentImg">
              <img src="/image/portfolio/img-6.jpg" alt="" className="Cmtimg" />
              <div className="nameContent">
                <div className="reply">
                  <PortText variant="portHeadingCaption">Jane Doe</PortText>
                  <PortText variant="portHeadingCaption">
                    <a href="/Singleblog">Reply</a>
                  </PortText>
                </div>
                <PortText variant="portCardDateText">May 1, 2018 at 14:35</PortText>
                <PortText variant="portCommentdetailText">
                  Elit repudiandae impedit obcaecati qui dignissimos Laborum eos eveniet ratione
                  possimus earum Corrupti temporibus at hyid.
                </PortText>
              </div>
            </div>
            <div className="line" />
          </div>
        </div>
      </div>
    </div>
    {/* <Contact data={contactData} /> */}
  </div>
);
export default SingleBlog;
