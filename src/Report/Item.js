import React from 'react';
import moment from 'moment'
import PropTypes from 'prop-types';

const Item = ({name, created, type, location}) => {  
  const createdDate =  moment.unix(created);

  return (
  <div className="list-item">
    <div className="list-col-1">      
    </div>
    <div className="list-col-2">
      <div className="list-item-name">{name}</div> 
      <div className="list-item-type">{type} {location}</div>
    </div>
    <div className="list-col-3">
      <div className="list-item-created-date">{createdDate.format("MMM DD")}</div>
      <div className="list-item-time">{createdDate.format("LT")}</div>
    </div>  
  </div>
) 
};

Item.propTypes = {
  name: PropTypes.string,
  created: PropTypes.number,
  type: PropTypes.string,
  location: PropTypes.string
};

export default Item;