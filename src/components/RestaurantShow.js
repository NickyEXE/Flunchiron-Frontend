import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRestaurant, clearRestaurant } from '../redux/actionCreators'
import { useEffect } from 'react'
import { Reviews, ReviewForm } from './'

function RestaurantShow({getRestaurant, name, url, lat, long, imageUrl, address, kindOfFood, zipCode, clearRestaurant, id}){
  const routeId = useParams().id

  useEffect(() => {
    getRestaurant(routeId)
    // if you return a function in your useEffect function, it will run that when the component is about to unmount
    return clearRestaurant
  }, [getRestaurant, routeId, clearRestaurant])

  const spinner = () => <div className="loader"></div>

  const loadedPage = () => <div className="show">
    <a href={url}><h1>{name}</h1></a>
    <img src={imageUrl} alt={name}/>
    <p>{kindOfFood}</p>
    <p>{address}</p>
    < ReviewForm />
    < Reviews />
  </div>

  return id ? loadedPage() : spinner()
}

const mapStateToProps = (state) => {
  return {...state.selectedRestaurant}
}

export default connect(mapStateToProps, {getRestaurant, clearRestaurant})(RestaurantShow);
