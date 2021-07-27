import useSWR from 'swr';

const useTestimonial = () => {
  const { data, error } = useSWR('/testimonials');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useTestimonial;
