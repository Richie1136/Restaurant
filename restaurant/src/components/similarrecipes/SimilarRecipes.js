import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './SimilarRecipes.css'

const SimilarRecipes = () => {

  const KEY = process.env.REACT_APP_FOOD_API_KEY

  const params = useParams()

  const obj = new URLSearchParams(params)
  const term = obj.get('id')



  const [similarRecipe, setSimilarRecipe] = useState()

  useEffect(() => {
    const fetchSimilarRecipe = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${term}/similar?apiKey=${KEY}`)
      const response = await data.json()
      setSimilarRecipe(response)
    }
    fetchSimilarRecipe()
  }, [KEY, term])



  return (
    <div className='container'>
      <h4 className='title'>Similar Recipes</h4>
      {similarRecipe?.map(({ title, sourceUrl, id, readyInMinutes }) => (
        <div className='recipe-info' key={id}>
          <a href={sourceUrl} target="_blank" rel="noreferrer"><h2 className="product-name">{title}</h2></a>
          <h4 className='timeNeed'>Time Needed: {readyInMinutes} Minutes</h4>
        </div>
      ))}
    </div>
  )
}

export default SimilarRecipes