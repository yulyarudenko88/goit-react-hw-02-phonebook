import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ type, children }) => <Btn type={type}>{children}</Btn>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
