import { baseUrl } from "../../api/Api"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from "../card/Card"
import './Home.css'

const Home = () => {

  const KEY = process.env.REACT_APP_FOOD_API_KEY


  const [allFoods, setAllFoods] = useState([])

  useEffect(() => {
    const getAllFoods = async () => {
      try {
        const response = await fetch(`${baseUrl}?apiKey=${KEY}&number=30`)
        const data = await response.json()
        console.log(data)
        setAllFoods(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllFoods()
  }, [])

  return (
    <>
      <div className="all-food">
        {allFoods?.results?.map(({ title, image, id }) => (
          <Card key={id}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
          </Card>
        ))}
      </div>
    </>
  )

}

export default Home


// import { useState, useEffect, useCallback } from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {

//   const [veggie, setVeggie] = useState([])
//   const KEY = process.env.REACT_APP_FOOD_API_KEY

//   const getVeggie = useCallback(async () => {

//     const check = localStorage.getItem('veggie')

//     if (check) {
//       setVeggie(JSON.parse(check))
//     } else {
//       const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=5&tags=vegetarian`)
//       const data = await api.json()
//       localStorage.setItem('veggie', JSON.stringify(data.recipes))
//       setVeggie(data.recipes)
//     }
//   }, [KEY])

//   useEffect(() => {
//     getVeggie()
//   }, [getVeggie])

//   return (
//     <div className='row'>
//       <h3>Veggie Picks</h3>
//       {veggie.map((rec) => {
//         return (
//           <div key={rec.id}>
//             <Link to={`/recipe/${rec.id}`}>
//               <p>{rec.title}</p>
//               <img src={rec.image} alt={rec.title} />
//             </Link>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Home