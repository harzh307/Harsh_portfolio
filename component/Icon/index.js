import PropTypes from 'prop-types';
import React, { useEffect, useRef, memo } from 'react';
import axios from '../../lib/axios';
import styles from './Icon.module.scss';

const Icon = ({ socialLink, variant, className }) => {
  const iconRef = useRef();

  useEffect(() => {
    const loadSvg = async () => {
      const res = await axios.get(socialLink.icon.url, {
        responseType: 'text',
      });
      while (iconRef.current.hasChildNodes()) {
        iconRef.current.removeChild(iconRef.current.firstChild);
      }
      iconRef.current.insertAdjacentHTML('beforeend', res.data);
    };

    loadSvg();
  }, []);
  return (
    <a
      href={socialLink.url}
      target="_blank"
      aria-label="icon"
      role="button"
      className={`${styles[variant]} ${className}`}
      ref={iconRef}
      rel="noreferrer">
      social Icons
    </a>
  );
};

Icon.propTypes = {
  variant: PropTypes.oneOf(['iconBtn', 'serviceBtn', 'searchIcon']),
};

export default memo(Icon);
