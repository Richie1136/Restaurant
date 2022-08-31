import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../loading/Loading'
import SimilarRecipes from '../similarrecipes/SimilarRecipes'
import './Recipe.css'

const Recipe = () => {

  const [recipeDetails, setRecipeDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')


  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const params = useParams()

  const obj = new URLSearchParams(params)
  const term = obj.get('id')


  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${term}/information?apiKey=${KEY}`)
      const data = await response.json()
      setRecipeDetails(data)
    }
    getDetails()
  }, [KEY, term])


  if (!recipeDetails) return <Loading />

  const handleActiveInstructions = () => {
    setActiveTab('instructions')
  }

  const handleActiveIngredients = () => {
    setActiveTab('ingredients')
  }

  return (
    <div className='detail'>
      <div>
        <h2 style={{ marginBottom: '10px' }}>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title}></img>
      </div>
      <div>
        <button className={activeTab === 'instructions' ? 'active' : ''} onClick={handleActiveInstructions}>Instructions</button>
        <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={handleActiveIngredients}>Ingredients</button>
        {activeTab === 'instructions' && (
          <div className="product-info">
            <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h3>
            <br />
            <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }} ></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {recipeDetails?.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            )
            )}
          </ul>
        )}
        <SimilarRecipes />
      </div>
    </div>
  )
}

export default Recipe