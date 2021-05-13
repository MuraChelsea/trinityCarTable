const initialState = {
  carList : []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SER__CARS':
      return {
        carList : action.payload
      }
    default:
      return state
  }
}