import Head from 'next/head';
import Resume from '../container/Resume';
import useEducation from '../hooks/useEducation';

const ResumePage = () => {
  const { data: educationData } = useEducation();
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
