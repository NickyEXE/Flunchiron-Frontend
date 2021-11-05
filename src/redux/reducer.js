const initialRestaurant = {
  name: "",
  url: "",
  lat: null,
  long: null,
  imageUrl: "",
  address: "",
  kindOfFood: "",
  zipCode: null,
  id: null
}

const initialState = {
  restaurants: [],
  selectedRestaurant: initialRestaurant
}

export function reducer(state=initialState, action){
  switch (action.type){
    case "GET_RESTAURANTS":
      return {...state, restaurants: action.payload};
    case "GET_RESTAURANT":
      return {...state, selectedRestaurant: action.payload};
    case "CLEAR_RESTAURANT":
      return {...state, selectedRestaurant: initialRestaurant};
    default:
      return {...state}
  }
}
