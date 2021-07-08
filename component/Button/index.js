/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_Button.module.scss';
import Loader from '../Loader';

// main button
const Button = ({ variant, className, isDisabled, children, isLoading, onClick, ...rest }) => (
  <button
    type="button"
    className={classNames(!isDisabled && !isLoading && styles[variant], {
      [styles.disable]: isDisabled || isLoading,
      [className]: !!className,
    })}
    onClick={isDisabled || isLoading ? () => {} : onClick}
    {...rest}>
    {isLoading && <Loader />}
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.oneOf([
    'portHomeButton',
    'portResume',
    'portSocialButton',
    'disable',
    'portNavButton',
  ]),
};

Button.defaultProps = {
  variant: 'portHomeButton',
};

export default Button;
