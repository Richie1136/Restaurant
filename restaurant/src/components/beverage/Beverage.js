import { useState, useEffect } from 'react'
import { baseUrl } from '../../api/Api'
import Loading from '../loading/Loading'
import MealItem from '../mealitem/MealItem'

const Beverage = () => {

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const [beverages, setBeverages] = useState()


  useEffect(() => {
    const fetchBeverages = async () => {
      const data = await fetch(`${baseUrl}?apiKey=${KEY}&type=beverage`)
      const response = await data.json()
      setBeverages(response)
    }
    fetchBeverages()
  }, [KEY])

  if (!beverages) return <Loading />

  const mealList = beverages?.results?.map((meal) => (
    <MealItem
      id={meal.id}
      title={meal.title}
      image={meal.image}
      key={meal.id}
    />
  ))

  return (
    <div className='item-detail'>
      {mealList}
    </div>
  )
}

export default Beverage