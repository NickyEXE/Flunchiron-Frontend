import { useState } from "react"
import { connect } from 'react-redux'
import { getRestaurants } from '../redux/actionCreators'


function SearchForm(props) {
  const [kindOfFood, setKindOfFood] = useState("")
  const [location, setLocation] = useState("")
  const [limit, setLimit] = useState(10)

  const onSubmit = (e) => {
    e.preventDefault()
    let args = []
    location && args.push({location})
    kindOfFood && args.push({kindOfFood})
    props.getRestaurants(args)
  }

  return <form onSubmit={onSubmit}>
    <label>
      Kind of Food:
      <input type="text" value={kindOfFood} onChange={(e) => setKindOfFood(e.target.value)} placeholder="Pizza, thai, etc."/>
    </label>
    <label>
      Location:
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Normal, Illinois"/>
    </label>
    <label>
      Limit:
      <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)}/>
    </label>
    <input type="submit" value="Search for some Food!"/>
  </form>
}

export default connect(null, {getRestaurants})(SearchForm)
