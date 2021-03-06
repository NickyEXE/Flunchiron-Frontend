import { useEffect } from "react"
import {getRestaurants} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { RestaurantCard } from "../components"

function RestaurantIndex({getRestaurants, restaurants}){
  useEffect(getRestaurants, [getRestaurants])

  return <div className="cards">
    {restaurants.map(restaurant => <RestaurantCard {...restaurant} key={restaurant.id}/>)}
  </div>
}

const mapStateToProps = (state) => {
  return {restaurants: state.restaurants}
}

export default connect(mapStateToProps, { getRestaurants })(RestaurantIndex)
