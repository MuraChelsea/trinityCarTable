import React, { useState } from 'react'
import './sort.css'

export default function Sort({setSort,setListType,setGroup}) {
  const [currentSort,setCurrentSort] = useState("")


  function onClickHandler(e) {
    const type = e.target.innerHTML.toLowerCase()

    if (currentSort === type) {
      setCurrentSort("")
      setSort("")
    }else {
      setCurrentSort(type)
      setGroup("")
      setSort(type)
      setListType("list")
    }
  }

  return (
    <div className="sort">
      <div className="sort__label">Sort by:</div>
      <ul className="sort__option" onClick={onClickHandler}>
        <li className={currentSort === "mark" ? "sort__option_item sort__active" : "sort__option_item"}>Mark</li>
        <li className={currentSort === "type" ? "sort__option_item sort__active" : "sort__option_item"}>Type</li>
        <li className={currentSort === "year" ? "sort__option_item sort__active" : "sort__option_item"}>Year</li>
      </ul>
    </div>
  )
}