import { Link } from 'react-router-dom'

export default function RestaurantCard({id, name, imageUrl, kindOfFood}){
  return <div className="card">
    <Link to={`/restaurants/${id}`}><h3>{name}</h3></Link>
    <Link to={`/restaurants/${id}`}><img src={imageUrl} alt={name}/></Link>
    <p>{kindOfFood}</p>
  </div>
}
