import Resume from '../container/Resume';
import useEducation from '../hooks/useEducation';

const ResumePage = () => {
  const { data: educationData } = useEducation();
  return <div>{educationData && <Resume />}</div>;
};

export default ResumePage;
