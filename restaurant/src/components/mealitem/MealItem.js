import { useContext } from 'react'
import MealItemForm from '../mealitemform/MealItemForm'
import CartContext from '../../store/cart-context'
import './MealItem.css'
import Card from '../card/Card'
import { Link } from 'react-router-dom'

const MealItem = ({ title, image, id }) => {
  const cartContext = useContext(CartContext)
  const handleAddToCart = (amount) => {
    cartContext.addItem({
      id, amount, title, image
    })
  }


  return (
    <div>
      <Card key={id}>
        <Link to={`/recipe/${id}`}>
          <h2 className='product-name'>{title}</h2>
          <img className='product-image' src={image} alt={title} />
        </Link>
        <MealItemForm onAddToCart={handleAddToCart} />
      </Card>
    </div>
  )
}

export default MealItem