const api = process.env.REACT_APP_API

export const getRestaurants = () => {
  return dispatch => fetch(api + "/restaurants")
  .then(res => res.json())
  .then(restaurants => dispatch({type: "GET_RESTAURANTS", payload: restaurants})
  )
}

export const getRestaurant = (id) => {
  return dispatch => fetch(api + `/restaurants/${id}`)
  .then(res => res.json())
  .then(restaurant => dispatch({type: "GET_RESTAURANT", payload: restaurant})
  )
}

export const clearRestaurant = () => ({type: "CLEAR_RESTAURANT"})

export const submitSignup = (user) => {
  return dispatch => fetch(api + "/users", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => handleUserResponse(res, dispatch))
}

export const submitLogin = (user) => {
  return dispatch => fetch(api + "/sessions", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res => handleUserResponse(res, dispatch))
}

export const submitReview = (review, restaurantId) => {
  return dispatch => fetch(api + `/restaurants/${restaurantId}/reviews`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(review)
  })
  .then(res => {
    if (res.ok) {
      res.json().then(review => dispatch({type: "ADD_REVIEW", payload: review}))
    } else {
      res.json().then(res => alert(res.errors))
    }
  })
}

export const autoLogin = () => {
  return dispatch => fetch(api + "/me", {
    headers: {
      'Authorization': localStorage.token
    }
  })
  .then(res => handleUserResponse(res, dispatch))
}

export const logout = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({type: "LOGOUT"})
  }
}

function handleUserResponse(res, dispatch){
  if (res.ok) {
    res.json()
    .then(response => {
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user})
    })
  } else {
    res.json()
    .then(res => alert(res.errors))
  }
}
