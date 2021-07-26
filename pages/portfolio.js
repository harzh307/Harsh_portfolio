import Head from 'next/head';
import PagePortfolio from '../container/PortfolioPage';
import usePortfolio from '../hooks/usePortfolio';

const Portfoliopage = () => {
  const { data: portfolioData } = usePortfolio();
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
