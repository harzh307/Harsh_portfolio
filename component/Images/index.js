/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import styles from './_Images.module.scss';

const PortImages = () => (
  <div>
    <Image className={styles.simple} src="/image/Home/Home.jpg" alt="" layout="fill" />
  </div>
);

// PortImages.propTypes = {
//   variant: PropTypes.oneOf(['simple', 'hover']),
// };

// PortImages.defaultProps = {
//   variant: 'simple',
// };

export default PortImages;
