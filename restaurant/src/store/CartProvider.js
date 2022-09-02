import { useReducer } from 'react'
import CartContext from './cart-context'


const defaultCartState = {
  items: [],
  totalAmount: 0
}

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0)

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.amount

    const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id)
    const existingCartItem = state.items[existingCartIndex]
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  if (action.type === 'REMOVE') {
    const existingCartIndex = state.items.findIndex((item) => item.id === action.id)
    const existingItem = state.items[existingCartIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.price
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
      updatedItems = [...state.items]
      updatedItems[existingCartIndex] = updatedItem
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === 'CLEAR') {
    return defaultCartState
  }
  return defaultCartState

}

const CartProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCart = (item) => {
    dispatchCartAction({ type: 'ADD', item })
  }
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: 'REMOVE', id })
  }
  const clearCart = () => {
    dispatchCartAction({ type: 'CLEAR' })
  }

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearItem: clearCart
  }

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider