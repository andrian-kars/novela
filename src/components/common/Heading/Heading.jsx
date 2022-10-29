import React from 'react';
import PropTypes from 'prop-types';
import s from './Heading.module.scss';
import cn from 'classnames';

export const Heading = ({ type, content, className }) => {
  return React.createElement(type, { className: cn(s.heading, className) }, content);
};

Heading.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
};
