import { useState, useEffect } from 'react'
import { baseUrl } from '../../api/Api'
import Loading from '../loading/Loading'
import MealItem from '../mealitem/MealItem'


const Appetizer = () => {

  const [apps, setApps] = useState()

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  useEffect(() => {
    const getApps = async () => {
      const data = await fetch(`${baseUrl}?apiKey=${KEY}&type=appetizer`)
      const response = await data.json()
      setApps(response)
    }
    getApps()
  }, [KEY])

  if (!apps) return <Loading />


  const mealList = apps?.results?.map((meal) => (
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

export default Appetizer