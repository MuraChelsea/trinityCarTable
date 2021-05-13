import React from "react";

import CarItem from "../carItem";
import "./carList.css";

export default function CarList({cars1,cars,listType}) {
  return (
    <div className="carList">
      {listType === "list" ?
        cars.map(car => {
          return (
            <CarItem
              key={car.ID}
              mark={car.mark}
              year={car.year}
              model={car.model}
              type={car.type}
              country={car.country}
              option={car.option}
              color={car.Color}
              listType={listType}
            />
          );
        })
      :
      cars1.length > 1 && cars1.map( car => <CarItem listType={listType} title={car.title} key={car.title} carList={car.items} /> )
      }
    </div>
  );
}

