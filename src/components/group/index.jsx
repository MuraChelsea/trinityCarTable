import React, { useState } from "react";
import "./group.css";

export default function Group({ setGroup, setListType }) {
  const [currentGroup, setCurrentGroup] = useState();

  function setSort(e) {
    const type = e.target.innerHTML.toLowerCase();

    if (currentGroup === type) {
      setCurrentGroup("");
      setGroup("");
      setListType("list");
    } else {
      setCurrentGroup(type);
      setGroup(type);
      setListType("groupList");
    }
  }

  return (
    <div className="sort">
      <div className="sort__label">Group by:</div>
      <ul className="sort__option" onClick={setSort}>
        <li
          className={
            currentGroup === "mark"
              ? "sort__option_item sort__active"
              : "sort__option_item"
          }
        >
          Mark
        </li>
        <li
          className={
            currentGroup === "type"
              ? "sort__option_item sort__active"
              : "sort__option_item"
          }
        >
          Type
        </li>
      </ul>
    </div>
  );
}
