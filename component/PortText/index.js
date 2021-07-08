import PropTypes from 'prop-types';
import styles from './portText.module.scss';

const PortText = ({ variant, component, children, className }) => (
  <div>
    {component === 'h1' ? (
      <h1 className={`${styles[variant]} ${className}`} component={component}>
        {children}
      </h1>
    ) : (
      <p className={`${styles[variant]} ${className}`} component={component}>
        {children}
      </p>
    )}
  </div>
);

PortText.propTypes = {
  variant: PropTypes.oneOf([
    'portEduPercent',
    'portHeaderText',
    'portHeaderHomeText',
    'portLogoText',
    'portNavText',
    'contactTextArea',
    'portHeaderCaption',
    'portHeaderCaptionBold',
    'portHeadingText',
    'portHeadingCaption',
    'portParaText',
    'portAboutCaption',
    'portParaAboutText',
    'portButtonText',
    'portServiceSubHeadingText',
    'portCounterText',
    'portCounterCaption',
    'portCardHeaderText',
    'portCardReadText',
    'portCardDateText',
    'portTestimonialText',
    'portTestimonialPText',
    'portTestimonialRoleText',
    'portContactHeadingText',
    'portContactDetailText',
    'portFilterText',
    'portFlexText',
    'portHeaderTextPCard',
    'portHoverCardText',
    'portSingleBlog',
    'portSingleBlogText',
    'portCommentText',
    'portCommentdetailText',
  ]),
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PortText.defaultProps = {
  variant: 'portHeaderText',
  component: '',
};

export default PortText;
