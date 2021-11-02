const initialState = {
  restaurants: []
}

export function reducer(state=initialState, action){
  switch (action.type){
    case "GET_RESTAURANTS":
      return {...state, restaurants: action.payload};
    default:
      return {...state}
  }
}
