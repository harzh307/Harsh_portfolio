import Head from 'next/head';
import PageLoader from '../container/PageLoader';
import PagePortfolio from '../container/PortfolioPage';
import usePortfolio from '../hooks/usePortfolio';

const Portfoliopage = () => {
  const { data: portfolioData, isLoading } = usePortfolio();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div>{portfolioData && <PagePortfolio />}</div>
    </>
  );
};

export default Portfoliopage;
