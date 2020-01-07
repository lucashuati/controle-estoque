import React from 'react';
import PropTypes from 'prop-types';


const ContainerPage = ({ title, children }) => (
  <>
    <div className="row">
      <div className="col-12">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  </>
);

ContainerPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ContainerPage;
