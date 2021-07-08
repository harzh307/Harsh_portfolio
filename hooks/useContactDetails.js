import useSWR from 'swr';

const useContact = () => useSWR('/contact-details');

export default useContact;
