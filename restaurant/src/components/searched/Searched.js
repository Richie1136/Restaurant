import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { baseUrl } from '../../api/Api'

const Searched = () => {

  const [getSearched, setSearched] = useState([])

  const params = useParams()

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  useEffect(() => {
    const getSearchedItem = async (name) => {
      const response = await fetch(`${baseUrl}?apiKey=${KEY}&query=${name}`)
      const data = await response.json()
      setSearched(data)
    }
    getSearchedItem()
  }, [KEY])


  return (
    <div>
      {getSearched?.map(({ id, title, image }) => (
        <div key={id}>
          <Link to={`/recipe/${id}`}>
            <h4>{title}</h4>
            <img src={image} alt={title} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Searched