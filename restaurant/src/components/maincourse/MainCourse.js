import { useState, useEffect } from 'react'
import { baseUrl } from '../../api/Api'
import Card from '../card/Card'
import './MainCourse.css'
import { Link } from 'react-router-dom'



const MainCourse = () => {

  const [main, setMain] = useState()

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  useEffect(() => {
    const mainDish = async () => {
      const data = await fetch(`${baseUrl}?apiKey=${KEY}&type=main course`)
      const response = await data.json()
      console.log(response)
      setMain(response)
    }
    mainDish()
  }, [KEY])


  return (
    <div className='main'>
      {main?.results.map(({ title, image, id }) => (
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

export default MainCourse