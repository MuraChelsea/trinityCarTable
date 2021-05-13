import React from 'react'
import './search.css'

export default function Search({ setSearchQuery }) {
  function onChangeHandler(e) {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <input className="search" onChange={onChangeHandler} type="text" name="search" placeholder="search..."/>
    </div>
  )
}