import { useRouter } from 'next/router';
import usePortfolio from '../../hooks/usePortfolio';
import Portfolio from '../Portfolio';
// import styles from '../Portfolio/portfolio.modules.scss';

const SinglePortfolio = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = usePortfolio(id);
  return <div>{data && <Portfolio data={data} />}</div>;
};

export default SinglePortfolio;
