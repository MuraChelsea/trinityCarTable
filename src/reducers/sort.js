const initialState = {
  type : "",
  query : "",
  group : "",
  listType : "list"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET__SORT':
      return {
        ...state,
        type : action.payload
      }
    case 'SET__SEARCH_QUERY':
      return {
        ...state,
        query : action.payload
      }
    case 'SET__GROUP__TYPE':
      return {
        ...state,
        group : action.payload
      }
    case 'SET__LIST__TYPE':
      return {
        ...state,
        listType : action.payload
      }
    default:
      return state
  }
}