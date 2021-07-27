import useSWR from 'swr';

const useBlog = () => {
  const { data, error } = useSWR('/blog-section');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useBlog;
