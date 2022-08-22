import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

  const [searchInput, setSearchInput] = useState('')

  const navigate = useNavigate()

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/searched/' + searchInput)
    setSearchInput("")
  }


  return (
    <form className='search' onSubmit={handleSubmit}>
      <input type="text" value={searchInput} onChange={handleChange} placeholder="Search for an item" />
      <div className='search-logo'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </div>
    </form>
  )
}

export default Search