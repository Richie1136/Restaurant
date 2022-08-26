import CartButton from '../cartbutton/CartButton';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ onShowCart }) => (
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
      <CartButton onClick={onShowCart} />
    </header>
  </>
);

export default Header;
