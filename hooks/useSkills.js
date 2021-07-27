import useSWR from 'swr';

const useSkills = () => {
  const { data, error } = useSWR('/skills');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSkills;
