import React, { useEffect } from 'react';

import CarList from './components/carList'
import Sort from './containers/sort'
import Search from './containers/search'
import GroupBy from './containers/group'
import cars from './data.json'

import "./app.css"


function App({ carList, groupCars,setCars,listType }) {
  useEffect(() => {
    setCars(cars);
  }, []);

  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
      <div className="controlPanel">
        <div>
          <GroupBy />
        </div>
        <div>
          <Sort />
        </div>
        <div>
          <Search />
        </div>
      </div>
      <CarList
        cars={carList}
        listType={listType}
        cars1={groupCars}
      />
    </div>
  );
}
export default App;
