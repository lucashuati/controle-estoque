import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ loading, children }) => (
  <>
    {loading ? (
      <p className="center">Carregando...</p>
    ) : children}
  </>
);

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Loading;
