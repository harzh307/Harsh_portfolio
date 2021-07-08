import PropTypes from 'prop-types';
import styles from './card.module.scss';

const Card = ({ children, variant, className, ...props }) => (
  <div className={`${styles[variant]} ${className}`} {...props}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['cardBlog', 'cardPort', 'hoverPort']),
};

Card.defaultProps = {
  className: '',
  variant: 'cardBlog',
};

export default Card;
