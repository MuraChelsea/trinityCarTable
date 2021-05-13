import App from '../App'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import _ from 'lodash'

import * as carActions from '../actions/carActions'

const groupCars = (cars,type) => {
  const groupCars = _
            .chain(cars)
            .groupBy(type)
            .map((value, key) => {
              return {
                title: key, 
                items: value
              }
            })
            .value();
  return groupCars
} 

const filterBooks = (cars, searchQuery) => {
  return cars.filter(
    o =>
      o.mark.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.model.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.type.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.year.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ,
  );
}

const mapStateToProps = ({car,filter}) => ({
  carList : filterBooks(_.sortBy(car.carList,filter.type),filter.query),
  groupCars : groupCars(car.carList,filter.group),
  listType : filter.listType
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(carActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(App)