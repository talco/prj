import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const Header = ({items}) => (
    <div className="reports-sidebar-list">
        <div className="reports-sidebar-list-items">
            {items.map((item, index) =>
                <Item key={item + index} className="reports-sidebar-list-item" {...item}></Item>
            )}
        </div>
    </div>
);

Header.propTypes = {
    items: PropTypes.array
};

export default Header;