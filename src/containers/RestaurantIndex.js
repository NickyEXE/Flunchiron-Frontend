import { useEffect } from "react"
import {getRestaurants} from '../redux/actionCreators'
import { connect } from 'react-redux'
import RestaurantCard from "../components/RestaurantCard"

function RestaurantIndex({getRestaurants, restaurants}){
  useEffect(() => restaurants.length === 0 && getRestaurants(), [restaurants])

  return <div className="cards">
    {restaurants.map(restaurant => <RestaurantCard {...restaurant} key={restaurant.id}/>)}
  </div>
}

const mapStateToProps = (state) => {
  return {restaurants: state.restaurants}
}

export default connect(mapStateToProps, { getRestaurants })(RestaurantIndex)
