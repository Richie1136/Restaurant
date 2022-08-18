import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (

    <nav className='nav'>
      <NavLink to='/'>
        <span>All Foods</span>
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
    </nav>
  )
}

export default Navigation