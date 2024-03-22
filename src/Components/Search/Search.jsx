import React, { useState } from 'react'
import search_icon from '../Assets/711319.png'
import "./Search.css"

const Search = () => {
  
  const[query,SetQuery] = useState('');
  return (
    <div>
      <div className='search1'>
          <img src={search_icon} className='search-icon'  width={25} height={25}  alt="" />
          <input type="text" placeholder = "Search" className='search2'/>
      </div>
    </div>
  )
}

export default Search
