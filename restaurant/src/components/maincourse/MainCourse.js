import { useState, useEffect } from 'react'
import { baseUrl } from '../../api/Api'
import Card from '../card/Card'
import './MainCourse.css'


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
  }, [])


  return (
    <div className='main'>
      {main?.results.map(({ title, image }) => (
        <Card>
          <h2>{title}</h2>
          <img src={image} alt={title} />
        </Card>
      ))}
    </div>
  )
}

export default MainCourse