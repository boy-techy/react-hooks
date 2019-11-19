import React, { useEffect, useState } from 'react';
import "./index.scss";
/**
 * Search Component to filter data from list
 * @param submitHandler
 * @returns {*}
 */
export default ({ submitHandler }) => {
    const [ searchValue, setSearch ] = useState('');
    const [lastSearchValue, setLastSearchValue] = useState('');
    
    /*useEffect(() => {
    
    }, [searchValue]);*/
    
    return (
      <form className="search-form" onSubmit={e => {
          e.preventDefault();
          if(lastSearchValue !== searchValue) {
              submitHandler(searchValue);
              setLastSearchValue(searchValue);
          }}
      }>
          <input type="text" onChange={e => setSearch(e.target.value)} value={searchValue}/>
      </form>
    )
}

