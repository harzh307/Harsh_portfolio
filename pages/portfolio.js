import React from 'react';
import PagePortfolio from '../container/PortfolioPage';
import usePortfolio from '../hooks/usePortfolio';

const Portfoliopage = () => {
  const { data: portfolioData } = usePortfolio();
  return <div>{portfolioData && <PagePortfolio />}</div>;
};

export default Portfoliopage;
