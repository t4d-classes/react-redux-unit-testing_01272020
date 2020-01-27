import React from 'react';
import PropTypes from 'prop-types';

export const ToolHeader = ({ headerText }) => {

  // return React.createElement('header', null, React.createElement('h1', null, headerText));
  // made a bug

  return <header>
    <h2>{headerText}</h2>
  </header>;


};

ToolHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};
