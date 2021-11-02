export const getRestaurants = () => {
  return dispatch => fetch("http://localhost:3000/restaurants")
  .then(res => res.json())
  .then(restaurants => dispatch({type: "GET_RESTAURANTS", payload: restaurants})
  )
}
