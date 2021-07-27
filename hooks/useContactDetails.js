import useSWR from 'swr';

const useContact = () => {
  const { data, error } = useSWR('/contact-details');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useContact;
