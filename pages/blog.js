import PageBlog from '../container/BlogPage';
import PageLoader from '../container/PageLoader';
import useBlog from '../hooks/useBlog';

const BlogPage = () => {
  const { data: blogData, isLoading } = useBlog();

  if (isLoading) {
    return <PageLoader />;
  }

  return <div>{blogData && <PageBlog />}</div>;
};

export default BlogPage;
