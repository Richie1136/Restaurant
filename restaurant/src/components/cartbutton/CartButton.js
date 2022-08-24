import { useState, useContext, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../carticon/CartIcon'
import classes from './CartButton.module.css';


const CartButton = ({ onclick }) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numberofItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount
  }, 0)


  const buttonClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnHighlighted(true)
    const timer = setTimeout(() => {
      setBtnHighlighted(false)
    }, 300);
    return () => clearTimeout(timer)
  }, [items])


  return (
    <button className={buttonClasses} onClick={onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span style={{ width: '72.85px', height: '23.33px' }}>Your Cart</span>
      <span className={classes.badge}>{numberofItems}</span>
    </button>
  );
};

export default CartButton;