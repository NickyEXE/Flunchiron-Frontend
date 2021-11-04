export default function RestaurantCard({name, imageUrl, kindOfFood}){

  return <div className="card">
    <h3>{name}</h3>
    <img src={imageUrl} alt={name}/>
    <p>{kindOfFood}</p>
  </div>
}
