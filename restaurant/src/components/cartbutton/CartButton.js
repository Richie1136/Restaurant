import { useState, useContext, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../carticon/CartIcon'
import './CartButton.css'

const CartButton = ({ onClick }) => {

  const [buttonHighlighted, setButtonHighlighted] = useState(false)

  const cart = useContext(CartContext)

  const { items } = cart

  const numberOfItems = items.reduce((currentNumber, item) => (
    currentNumber + item.amount
  ), 0)

  useEffect(() => {
    if (items.length === 0) return
    setButtonHighlighted(true)
    const timer = setTimeout(() => {
      setButtonHighlighted(false)
    }, 300);
    return () => clearTimeout(timer)
  }, [items])


  return (
    <button className='btn' onClick={onClick}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numberOfItems}</span>
    </button>
  )
}

export default CartButton