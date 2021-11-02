export default function RestaurantCard({name, image_url, kind_of_food}){

  return <div className="card">
    <h3>{name}</h3>
    <img src={image_url} alt={name}/>
    <p>{kind_of_food}</p>
  </div>
}
