const initialRestaurant = {
  name: "",
  url: "",
  lat: null,
  long: null,
  imageUrl: "",
  address: "",
  kindOfFood: "",
  zipCode: null,
  id: null,
  reviews: []
}

const initialUser = {
  username: ""
}

const initialState = {
  restaurants: [],
  selectedRestaurant: initialRestaurant,
  user: initialUser
}

export function reducer(state=initialState, action){
  switch (action.type){
    case "GET_RESTAURANTS":
      return {...state, restaurants: action.payload};
    case "GET_RESTAURANT":
      return {...state, selectedRestaurant: action.payload};
    case "CLEAR_RESTAURANT":
      return {...state, selectedRestaurant: initialRestaurant};
    case "SET_USER":
      return {...state, user: action.payload};
    case "ADD_REVIEW":
      return {...state, selectedRestaurant: {...state.selectedRestaurant, reviews: [action.payload, ...state.selectedRestaurant.reviews]}}
    case "LOGOUT":
      return {...state, user: initialUser}
    default:
      return {...state}
  }
}
