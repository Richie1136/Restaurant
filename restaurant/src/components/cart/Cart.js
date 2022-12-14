import { useContext, useState } from 'react'
import './Cart.css'
import Modal from '../modal/Modal'
import CartContext from '../../store/cart-context'
import CartItem from '../cartItem/CartItem'
import Checkout from '../checkout/Checkout'
import { useStateValue } from '../../store/state-context'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from '../../store/CartProvider'



const Cart = ({ onClose }) => {
  const [checkout, setCheckout] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const cartContext = useContext(CartContext)

  const [{ cart, dispatch }] = useStateValue()

  let cartTotalAmount = cartContext.items.map((item) => {
    return item.amount
  })

  let totalAmount = cartTotalAmount.reduce((acc, item) => {
    return acc + item
  }, 0)


  const hasItems = cartContext.items.length > 0

  const cartItemRemove = (id) => {
    cartContext.removeItem(id)
  }

  const cartItemAdd = (item) => {
    cartContext.addItem({ ...item, amount: 1 })
  }


  const handleOrder = () => {
    setCheckout(true)
  }

  const submitOrder = async (userData) => {
    try {
      setSubmitting(true)
      await fetch('https://react-foodapp-ac153-default-rtdb.firebaseio.com/meals.json', {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedFood: cartContext.items
        })
      })
    } catch (err) {
      return err
    }
    setSubmitting(false)
    setSubmitted(true)
    cartContext.clearItem()
  }

  const cartItems = <ul className='cart-items'>{cartContext.items.map((item) => (
    <CartItem key={item.id} title={item.title} amount={item.amount} onAdd={cartItemAdd.bind(null, item)} onRemove={cartItemRemove.bind(null, item.id)} />
  ))}
  </ul>

  const modalActions = <div className='actions'>
    <button className='button--alt' onClick={onClose}>Close</button>
    {hasItems && <button className='button' onClick={handleOrder}>Order</button>}
  </div>

  const cartModalContent = <>
    {cartItems}
    <div className='total'>

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className='amount'>
              Total Amount ({cart?.length} items):
              <strong className='total-amount'>{totalAmount}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
    {checkout && <Checkout onSubmit={submitOrder} onClose={onClose} />}
    {!checkout && modalActions}
  </>


  const submittingData = <p>Sending order data</p>

  const submittedContent =
    <>
      <p>Successfully sent order</p><div className='actions'>
        <button className='button' onClick={onClose}>Close</button>
      </div>
    </>

  return (
    <Modal onClose={onClose}>
      {!submitting && !submitted && cartModalContent}
      {submitting && submittingData}
      {!submitting && submitted && submittedContent}
    </Modal>
  )
}

export default Cart