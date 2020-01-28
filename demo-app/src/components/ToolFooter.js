import React from 'react';
import PropTypes from 'prop-types';

export const ToolFooter = ({ copyrightYear, companyName }) => {

  return <footer>
    <small>&copy; {copyrightYear} {companyName}. All Rights Reserved.</small>
  </footer>

};

ToolFooter.propTypes = {
  companyName: PropTypes.string.isRequired,
};