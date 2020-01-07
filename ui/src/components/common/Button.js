import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ type, children, onClick }) => (
  <button className={`btn btn-${type} m-1`} type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'success',
};

export default Button;
