import Head from 'next/head';
import PageLoader from '../container/PageLoader';
import Resume from '../container/Resume';
import useEducation from '../hooks/useEducation';

const ResumePage = () => {
  const { data: educationData, isLoading } = useEducation();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <div>{educationData && <Resume />}</div>
    </>
  );
};

export default ResumePage;
