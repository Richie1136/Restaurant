import CartButton from '../cartbutton/CartButton';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../../store/state-context';
import { auth } from '../../firebase'
import { useEffect } from 'react'

const Header = ({ onShowCart }) => {

  const [{ user }, dispatch] = useStateValue()

  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])


  return (
    <>
      <header className='header'>
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
        <CartButton onclick={onShowCart} />
        <NavLink to={!user && '/login'}>
          <div className='nav-option' onClick={handleAuth}>
            <span className='nav-option-lineone'>Hello {user ? user.email : 'Guest'}</span>
            <span className='nav-option-linetwo'>{user ? 'Sign out' : 'Sign in'}</span>
          </div>
        </NavLink>
      </header>
    </>
  )
}

export default Header;
