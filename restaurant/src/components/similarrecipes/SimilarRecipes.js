import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
      console.log(response)
      setSimilarRecipe(response)
    }
    fetchSimilarRecipe()
  }, [KEY, term])


  return (
    <div style={{ marginTop: '20px' }}>
      <h4 style={{ marginLeft: '100px' }}>Similar Recipes</h4>
      {similarRecipe?.map(({ title, sourceUrl, id, readyInMinutes }) => (
        <div key={id} style={{ display: 'flex', marginTop: '20px', textAlign: 'center' }}>
          <a href={sourceUrl} target="_blank" rel="noreferrer"><h2 className="product-name" style={{ width: '96px' }}>{title}</h2></a>
          <h4 style={{ marginTop: '10px', width: '100%', position: 'relative', left: 0, marginBottom: '20px', padding: '10px', borderBottom: '1px solid black' }}>Time Needed: {readyInMinutes} Minutes</h4>
        </div>
      ))}
    </div>
  )
}

export default SimilarRecipes