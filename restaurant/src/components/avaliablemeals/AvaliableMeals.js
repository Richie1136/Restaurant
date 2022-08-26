import React, { useEffect, useState } from 'react'
import './AvaliableMeals.css'
import Card from '../card/Card';
import MealItem from '../mealitem/MealItem';
import { baseUrl } from '../../api/Api';


const AvaliableMeals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${baseUrl}?apiKey=${KEY}&number=30`)
        const data = await response.json()
        console.log(data)
        setMeals(data)
        if (!response.ok) {

        }
        setLoading(false)
      } catch (err) {
        return err
      }
    }
    fetchMeals()

  }, [KEY])

  if (loading) {
    return <section className='mealsLoading'>
      <p>Loading...</p>
    </section>
  }

  const mealsList = meals?.results?.map((meal) => (
    <MealItem
      id={meal.id}
      title={meal.title}
      image={meal.image}
    />

  ))

  return (
    <>
      <section className='meals'>
        {mealsList}
      </section>
    </>
  )
}

export default AvaliableMeals
