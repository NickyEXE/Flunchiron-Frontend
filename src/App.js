import './App.css';
import { RestaurantIndex, RestaurantShow, Nav, Auth } from './components'
// import RestaurantIndex from "./containers/RestaurantIndex"
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'


function App(props) {
  console.log(props)
  return (
    <>
      <h1>FEED</h1>
      <Nav/>
      { props.user.username ?
      <Switch>
        <Route path="/restaurants/:id"><RestaurantShow/></Route>
        <Route path="/restaurants"><RestaurantIndex/></Route>
        <Route exact path="/"><RestaurantIndex/></Route>
      </Switch> :
      <Auth/>
    }
    </>
  );
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps)(App);
