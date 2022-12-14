import classes from './CartItem.module.css'


const CartItem = ({ title, amount, onRemove, onAdd }) => (
  <li className={classes['cart-item']}>
    <div>
      <h5>{title}</h5>
      <div className={classes.summary}>
        <span className={classes.amount}>x {amount}</span>
      </div>
    </div>
    <div className={classes.actions}>
      <button onClick={onRemove}>-</button>
      <button onClick={onAdd}>+</button>
    </div>
  </li>
)

export default CartItem