import React, { useState } from "react";
import "./carItem.css";

export default function CarItem({
  listType,
  mark,
  model,
  type,
  year,
  color,
  country,
  option,
  title,
  carList,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExtend() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      className={isExpanded ? "carItem carItem__active" : "carItem"}
      onClick={toggleExtend}
    >
      {listType === "list" ? (
        <div className="carItem__grid">
          <div className="carItem___section">{mark}</div>
          <div className="carItem___section">{model}</div>
          <div className="carItem___section">{type}</div>
          <div className="carItem___section">{year}</div>

          <div
            className={
              isExpanded ? "carExtend carExtend__active" : "carExtend"
            }
          >
            <div className="carExtend__content">
              <div className="cardExtend__grid">
                <div>
                  <span>
                    <b>Year</b>
                  </span>{" "}
                  <br />
                  {year}
                </div>
                <div>
                  <span>
                    <b>Color</b>
                  </span>{" "}
                  <br />
                  {color}
                </div>
                <div>
                  <span>
                    <b>Country</b>
                  </span>{" "}
                  <br />
                  {country}
                </div>
                <div>
                  <span>
                    <b>options</b>
                  </span>{" "}
                  <br />
                  {option}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="groupCard">
          <div className="groupCard__grid">
            <p className="groupCard__title">{title}</p>
            {carList.map((car) => {
              return (
                <div className="carItem__grid">
                  <div className="carItem___section">{car.mark}</div>
                  <div className="carItem___section">{car.model}</div>
                  <div className="carItem___section">{car.type}</div>
                  <div className="carItem___section">{car.year}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
