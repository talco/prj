import React from 'react';
import PropTypes from 'prop-types';

const Search = ({handleSearch, query}) => (
    <div className="reports-sidebar-search">
      <input value={query} type="text" placeholder="search reports" onChange={handleSearch} />
    </div>
)

Search.propTypes = {
  handleSearch: PropTypes.function,
  query: PropTypes.string,
};

export default Search;