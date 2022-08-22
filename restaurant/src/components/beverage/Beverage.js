import { useState, useEffect } from 'react'
import { baseUrl } from '../../api/Api'
import Card from '../card/Card'
import { Link } from 'react-router-dom'

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
    <div className='item-detail'>
      {beverages?.results.map(({ title, image, id }) => (
        <Card key={id}>
          <Link to={`/recipe/${id}`}>
            <h2 className='product-name'>{title}</h2>
            <img className='product-image' src={image} alt={title} />
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default Beverage