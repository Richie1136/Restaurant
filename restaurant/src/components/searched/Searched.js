import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../api/Api'
import Loading from '../loading/Loading'
import MealItem from '../mealitem/MealItem'

const Searched = () => {

  const [getSearched, setSearched] = useState([])

  const params = useParams()

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const getSearchedItem = useCallback(async (name) => {
    const response = await fetch(`${baseUrl}?apiKey=${KEY}&query=${name}`)
    const data = await response.json()
    setSearched(data.results)
  }, [KEY])

  useEffect(() => {
    getSearchedItem(params.search)
  }, [getSearchedItem, params.search])


  if (!getSearched) return <Loading />

  const mealList = getSearched?.map((meal) => (
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

export default Searched