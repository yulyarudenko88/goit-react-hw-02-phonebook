import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ title, type }) => (
  <>
    <Btn type={type}>{title}</Btn>
  </>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
