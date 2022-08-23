import { NavLink } from 'react-router-dom'
import CartButton from '../cartbutton/CartButton'
import './Navigation.css'

const Navigation = ({ onShowCart }) => {
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
      <CartButton onClick={onShowCart} />
    </nav>
  )
}

export default Navigation