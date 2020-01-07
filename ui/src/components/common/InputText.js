import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({
  id, label, placeholder, value, col, onChange, type,
}) => (
  <div className={`input-text col-${col}`}>
    <div className={`label col-${col}`}>
      <label className="font-heavy" htmlFor={id}>{label}</label>
    </div>
    <div>
      <input className={`input col-${col}`} id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  </div>
);

InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  col: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  col: 12,
  type: 'text',
};

export default InputText;
