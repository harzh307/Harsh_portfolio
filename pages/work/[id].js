import { useRouter } from 'next/router';
import Head from 'next/head';
import useProjects from '../../hooks/useProjects';
import Portfolio from '../../container/SinglePortfolio';
import PageLoader from '../../container/PageLoader';

const SinglePortfolio = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: projectsData, isLoading } = useProjects(id);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      {projectsData && <Portfolio data={projectsData} />}
    </>
  );
};

export default SinglePortfolio;
