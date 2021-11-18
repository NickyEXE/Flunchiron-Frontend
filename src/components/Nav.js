import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'

function Nav({logout, username}){
  // if we're logged in, show the traditional nav
  // if we're not logged in, show something else
  // to do that, see if we have a user

  const loggedInRender = () => <nav>
    <NavLink to="/restaurants"><button>See All Restaurants</button></NavLink>
    <button onClick={logout}>Logout!</button>
  </nav>

  const loggedOutRender = () => <nav>Hello, user! Sign in or sign up!</nav>

  return username ? loggedInRender() : loggedOutRender()
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout})(Nav);
