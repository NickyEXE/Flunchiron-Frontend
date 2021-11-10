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

export const submitSignup = (user) => {
  return dispatch => fetch("http://localhost:3000/users", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(response => {
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user})
  })
}

export const submitLogin = (user) => {
  return dispatch => fetch("http://localhost:3000/sessions", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => res.json())
  .then(response => {
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user})
  })
}
