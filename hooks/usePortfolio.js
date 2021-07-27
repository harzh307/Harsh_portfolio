import useSWR from 'swr';

const usePortfolio = () => {
  const { data, error } = useSWR('/portfolio-section');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePortfolio;
