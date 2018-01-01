import React from 'react';
import moment from 'moment'

export default ({name, created, type, location}) => (
    <div className="list-item">
      <div className="list-col-1">
        <span>*</span>
      </div>
      <div className="list-col-2">
        <div className="list-item-name">{name}</div> 
        <div className="list-item-type">{type} {location}</div>
      </div>
      <div className="list-col-3">
        <div className="list-item-created-date">{moment.unix(created).format("MMM DD")}</div>          
        <div className="list-item-time">{moment.unix(created).format("LT")}</div>
      </div>  
    </div>
  );
  