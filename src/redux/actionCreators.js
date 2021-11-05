export const getRestaurants = () => {
  return dispatch => fetch("http://localhost:3000/restaurants")
  .then(res => res.json())
  .then(restaurants => dispatch({type: "GET_RESTAURANTS", payload: restaurants})
  )
}

export const getRestaurant = (id) => {
  return dispatch => fetch(`http://localhost:3000/restaurants/${id}`)
  .then(res => res.json())
  .then(restaurant => dispatch({type: "GET_RESTAURANT", payload: restaurant})
  )
}

export const clearRestaurant = () => ({type: "CLEAR_RESTAURANT"})
