import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../api/Api'

const Recipe = () => {

  const [recipeDetails, setRecipeDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')


  const KEY = process.env.REACT_APP_FOOD_API_KEY


  let params = useParams()


  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${KEY}`)
      const data = await response.json()
      setRecipeDetails(data)
    }
    getDetails()
  }, [KEY, params.id])




  return (
    <>
      <div>
        <h2 style={{ 'marginBottom': '10px' }}>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title}></img>
      </div>
      <div>
        <button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</button>
        <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }} style={{ 'width': '50%', 'marginTop': '15px' }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {recipeDetails?.extendedIngredients.map((ingredient) => {
              return (
                <li key={ingredient.id}>{ingredient.original}</li>
              )
            })}
          </ul>
        )}
      </div>
    </>
  )
}

export default Recipe