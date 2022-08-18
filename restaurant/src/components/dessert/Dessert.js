import { useState, useEffect } from "react"
import { baseUrl } from "../../api/Api"
import { Link } from "react-router-dom"
import Card from "../card/Card"


const Dessert = () => {

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const [desserts, setDesserts] = useState()

  useEffect(() => {
    const fetchDesserts = async () => {
      const data = await fetch(`${baseUrl}?apiKey=${KEY}&type=dessert`)
      const response = await data.json()
      console.log(response)
      setDesserts(response)
    }
    fetchDesserts()
  }, [KEY])


  return (
    <div>
      {desserts?.results.map(({ title, image, id }) => (
        <Card key={id}>
          <Link to={`/recipe/${id}`}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default Dessert