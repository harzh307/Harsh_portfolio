import useSWR from 'swr';

const useEducationSkills = () => {
  const { data, error } = useSWR('/education-and-skills-section');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useEducationSkills;
