import React, { useState } from 'react';


export default ({ submitHandler }) => {
    const { searchValue, setSearch } = useState('');
    return (
      <form onSubmit={submitHandler}>
          <input type="text" onChange={e => setSearch(e.target.value)} value={searchValue}/>
      </form>
    )
}

