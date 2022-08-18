import { baseUrl } from "../../api/Api"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from "../card/Card"
import './Home.css'

const Home = () => {

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetch(`${baseUrl}?apiKey=${KEY}&number=30`)
        const data = await response.json()
        console.log(data)
        setAllProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [KEY])

  return (
    <>
      <div className="all-food">
        {allProducts?.results?.map(({ title, image, id }) => (
          <div key={id}>
            <Card>
              <Link to={`/recipe/${id}`}>
                <h2 style={{ flexWrap: 'nowrap', fontSize: '18px' }}>{title}</h2>
                <img style={{ display: 'block', marginLeft: 'auto', marginTop: '20px', marginRight: 'auto', width: '100%' }} src={image} alt={title} />
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home