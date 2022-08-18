import { useState, useEffect } from 'react'
import { baseUrl } from '../../api/Api'
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import './Beverage.css'

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


  return (
    <div className='bev'>
      {beverages?.results.map(({ title, image, id }) => (
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

export default Beverage