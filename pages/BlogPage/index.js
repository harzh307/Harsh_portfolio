import Header from '../../component/Header';
import PortText from '../../component/PortText';
import useBlog from '../../hooks/useBlog';

const BlogPage = () => {
  const { data: blogData } = useBlog();

  return (
    <div className="light-theme">
      <Header>
        <PortText variant="portSingleBlog">Blog List</PortText>
        <a className="backAlign" href="javascript:history.go(-1)">
          Back
        </a>
      </Header>
      <section className="blogList">
        <div className="items">
          {blogData.blogs.map(x => (
            <div key={x.id} className="cardBlog">
              <Image
                src="/image/blog/img-2.jpg"
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
        </div>
      </section>
    </div>
  );
};
export default BlogPage;
