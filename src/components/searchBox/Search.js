import React from 'react';
import './search-box.styles.css';

const Search = ({search, handleChange}) => {
    return (  
        <input 
            type="text" 
            name='search' 
            className="search"
            value={search} 
            onChange={handleChange} 
            placeholder="Search for a monster" 
        />
    )
}

export default Search;
