import { useState, useEffect } from "react"
import { baseUrl } from "../../api/Api"
import Loading from "../loading/Loading"
import MealItem from "../mealitem/MealItem"


const Dessert = () => {

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const [desserts, setDesserts] = useState()

  useEffect(() => {
    const fetchDesserts = async () => {
      const data = await fetch(`${baseUrl}?apiKey=${KEY}&type=dessert`)
      const response = await data.json()
      setDesserts(response)
    }
    fetchDesserts()
  }, [KEY])

  if (!desserts) return <Loading />

  const mealList = desserts?.results?.map((meal) => (
    <MealItem
      id={meal.id}
      title={meal.title}
      image={meal.image}
      key={meal.id}
    />
  ))


  return (
    <div className="item-detail">
      {mealList}
    </div>
  )
}

export default Dessert