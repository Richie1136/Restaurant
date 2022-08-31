import { useRef, useState } from 'react'
import Input from '../input/Input'
import './MealItemForm.css'
import { useStateValue } from '../../store/state-context';

const MealItemForm = ({ onAddToCart }) => {


  const [{ user }, dispatch] = useStateValue()


  const [isAmountValid, setIsAmountValid] = useState(true)

  const amountRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const amount = amountRef.current.value
    const enterNumber = +amount

    if (amount.trim().length === 0 || enterNumber < 1 || enterNumber > 10) {
      setIsAmountValid(false)
      return
    }
    onAddToCart(enterNumber)
  }


  return (
    <form className='form' onSubmit={handleSubmit}>
      <Input
        ref={amountRef} label="Amount"
        input={{ id: 'amount', type: 'number', min: '1', max: '10', defaultValue: '1' }} />
      {user && <button>Add</button>}
      {!isAmountValid && <p>Please Enter a valid amount (1-10)</p>}
    </form>
  )
}

export default MealItemForm