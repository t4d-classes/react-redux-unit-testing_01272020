import React from 'react';
import PropTypes from 'prop-types';

export const ToolFooter = ({ companyName }) => {

  return <footer>
    <small>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</small>
  </footer>

};

ToolFooter.propTypes = {
  companyName: PropTypes.string.isRequired,
};