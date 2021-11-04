import './App.css';
import { RestaurantIndex, RestaurantShow } from './components'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <h1>FEED</h1>
      <Switch>
        <Route path="/restaurants/:id"><RestaurantShow/></Route>
        <Route path="/restaurants"><RestaurantIndex/></Route>
      </Switch>
    </>
  );
}

export default App;
