import PageBlog from '../container/BlogPage';
import useBlog from '../hooks/useBlog';

const BlogPage = () => {
  const { data: blogData } = useBlog();
  return <div>{blogData && <PageBlog />}</div>;
};

export default BlogPage;
