import { useState, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { baseUrl } from '../../api/Api'
import Card from '../card/Card'

const Searched = () => {

  const [getSearched, setSearched] = useState([])

  const params = useParams()

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const getSearchedItem = useCallback(async (name) => {
    const response = await fetch(`${baseUrl}?apiKey=${KEY}&query=${name}`)
    const data = await response.json()
    setSearched(data.results)
  }, [KEY])

  useEffect(() => {
    getSearchedItem(params.search)
  }, [getSearchedItem, params.search])


  return (
    <div className='item-detail'>
      {getSearched?.map(({ id, title, image }) => (
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

export default Searched