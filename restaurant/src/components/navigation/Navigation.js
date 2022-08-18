import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (

    <nav className='nav'>
      <NavLink to='/'>
        <span>All Products</span>
      </NavLink>
      <NavLink to='/apps'>
        <span>Appetizers</span>
      </NavLink>
      <NavLink to='/main'>
        <span>Main Course</span>
      </NavLink>
      <NavLink to='/dessert'>
        <span>Desserts</span>
      </NavLink>
      <NavLink to='/beverages'>
        <span>Beverages</span>
      </NavLink>
    </nav>
  )
}

export default Navigation