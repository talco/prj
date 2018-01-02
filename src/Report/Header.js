import React from 'react';
import PropTypes from 'prop-types';

const Header = ({handleRefresh, handleClose, numberOfItems}) => (
    <div className="reports-sidebar-header">
        <h1>Reports {numberOfItems}</h1>        
        <i className="refresh-icon" onClick={handleRefresh}></i>
        <i className="close-icon" onClick={handleClose}></i>
    </div>
);

Header.propTypes = {
  handleRefresh: PropTypes.func,
  handleClose: PropTypes.func,
  numberOfItems: PropTypes.number
};

export default Header;
