import { baseUrl } from "../../api/Api"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from "../card/Card"
import './Home.css'

const Home = () => {

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const [allFoods, setAllFoods] = useState([])

  useEffect(() => {
    const getAllFoods = async () => {
      try {
        const response = await fetch(`${baseUrl}?apiKey=${KEY}&number=30`)
        const data = await response.json()
        console.log(data)
        setAllFoods(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllFoods()
  }, [])

  return (
    <>
      <div className="all-food">
        {allFoods?.results?.map(({ title, image, id }) => (
          <div key={id}>
            <Card>
              <Link to={`/recipe/${id}`}>
                <h2>{title}</h2>
                <img src={image} alt={title} />
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home