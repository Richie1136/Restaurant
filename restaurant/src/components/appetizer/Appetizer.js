import { useState, useEffect } from 'react'
import { baseUrl } from '../../api/Api'
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import './Appetizer.css'


const Appetizer = () => {

  const [apps, setApps] = useState()

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  useEffect(() => {
    const getApps = async () => {
      const data = await fetch(`${baseUrl}?apiKey=${KEY}&type=appetizer`)
      const response = await data.json()
      console.log(response)
      setApps(response)
    }
    getApps()
  }, [KEY])


  return (
    <div className='app'>
      {apps?.results.map(({ title, image, id }) => (
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

export default Appetizer