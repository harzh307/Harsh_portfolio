import PropTypes from 'prop-types';
import styles from './portTextInput.module.scss';

const PortTextInput = ({ variant, className, component, ...rest }) => (
  <div>
    {component === 'textarea' ? (
      <textarea className={`${styles[variant]} ${className}`} component={component} {...rest} />
    ) : (
      <input className={`${styles[variant]} ${className}`} component={component} {...rest} />
    )}
  </div>
);

PortTextInput.propTypes = {
  variant: PropTypes.oneOf(['contactInput', 'contactTextArea']),
  component: PropTypes.string,
};

PortTextInput.defaultProps = {
  variant: 'contactInput',
  component: 'input',
};

export default PortTextInput;
