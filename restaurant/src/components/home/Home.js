import { baseUrl } from "../../api/Api"
import { useState, useEffect } from 'react'
import Loading from "../loading/Loading"
import MealItem from "../mealitem/MealItem"

const Home = () => {

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(`${baseUrl}?apiKey=${KEY}&number=30`)
        const data = await response.json()
        setAllProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [KEY])

  if (!allProducts) return <Loading />

  const mealList = allProducts?.results?.map((meal) => (
    <MealItem
      id={meal.id}
      title={meal.title}
      image={meal.image}
      key={meal.id}
    />
  ))

  return (
    <>
      <div className="item-detail">
        {mealList}
      </div>
    </>
  )
}

export default Home