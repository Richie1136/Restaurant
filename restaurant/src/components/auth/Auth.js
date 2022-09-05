import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../../firebase'
import './Auth.css'

const Auth = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


  const signIn = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/random')
        }
      }).catch(error => alert(error.message))
  }

  const signUp = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/random')
        }
      }).catch(error => alert(error.message))
  }



  return (
    <div className='login'>
      <p>Welcome to Resturant App, please sign in or create an account and explore different recipes.</p>
      <div className='login-container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" onChange={handleEmailChange} value={email} />
          <h5>Password</h5>
          <input type="password" onChange={handlePasswordChange} value={password} />
        </form>
        <button className='signin' onClick={signIn} type="submit"><h3>Sign In</h3></button>
        <button className='signup' onClick={signUp} type="submit"><h3>Create Account</h3></button>
      </div>
    </div>
  )
}

export default Auth