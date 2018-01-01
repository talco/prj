import React from 'react';
import PropTypes from 'prop-types';

const Header = ({handleRefresh, handleClose, numberOfItems}) => (
    <div className="reports-sidebar-header">
        <h1>Reports {numberOfItems}</h1>        
        <i className="refresh" onClick={handleRefresh}>refresh</i>
        <i className="close" onClick={handleClose}>close</i>
    </div>
);

Header.propTypes = {
  handleRefresh: PropTypes.function,
  handleClose: PropTypes.function,
  numberOfItems: PropTypes.number
};

export default Header;
