import useSWR from 'swr';

const useServices = () => {
  const { data, error } = useSWR('/service-section');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useServices;
