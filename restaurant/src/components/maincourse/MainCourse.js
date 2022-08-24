import { useState, useEffect } from 'react'
import { baseUrl } from '../../api/Api'
import Loading from '../loading/Loading'
import MealItem from '../mealitem/MealItem'


const MainCourse = () => {

  const [main, setMain] = useState()

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  useEffect(() => {
    const mainDish = async () => {
      const data = await fetch(`${baseUrl}?apiKey=${KEY}&type=main course`)
      const response = await data.json()
      setMain(response)
    }
    mainDish()
  }, [KEY])

  if (!main) return <Loading />

  const mealList = main?.results?.map((meal) => (
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

export default MainCourse