import useSWR from 'swr';

const useEducation = () => {
  const { data, error } = useSWR('/educations');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useEducation;
