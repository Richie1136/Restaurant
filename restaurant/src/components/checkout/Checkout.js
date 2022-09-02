import './Checkout.css'

import { useRef, useState } from 'react'


const isEmpty = (value => value.trim().length === 0)
const is5Chars = (value => value.trim().length === 5)

const Checkout = ({ onClose, onSubmit }) => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const [nametouched, setNameTouched] = useState(false)
  const [addresstouched, setAddressTouched] = useState(false)
  const [ziptouched, setZipTouched] = useState(false)
  const [citytouched, setCityTouched] = useState(false)


  const nameInput = useRef()
  const addressInput = useRef()
  const zipcodeInput = useRef()
  const cityInput = useRef()


  const handleConfirm = (e) => {
    e.preventDefault()
    setNameTouched(true)
    setAddressTouched(true)
    setZipTouched(true)
    setCityTouched(true)

    const enteredname = nameInput.current.value
    const enteredaddress = addressInput.current.value
    const enteredzip = zipcodeInput.current.value
    const enteredcity = cityInput.current.value

    const enterednameIsValid = !isEmpty(enteredname)
    const enteredaddressIsValid = !isEmpty(enteredaddress)
    const enteredcityIsValid = !isEmpty(enteredcity)
    const enteredzipIsValid = is5Chars(enteredzip)


    // setName('')
    // setAddress('')
    // setZipCode('')
    // setCity('')
    const { setCity, setName, setAddress, setZipCode } = ""
    setNameTouched(false)
    setAddressTouched(false)
    setCityTouched(false)
    setZipTouched(false)

    const formIsValid = enterednameIsValid && enteredaddressIsValid &&
      enteredcityIsValid && enteredzipIsValid

    if (!formIsValid) {
      return
    }
    onSubmit({
      name, address, zipcode, city
    })
  }


  const onNameBlur = (event) => {
    setNameTouched(false)
  }

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onAddressBlur = (event) => {
    setAddressTouched(false)
  }

  const onAddressChange = (event) => {
    setAddress(event.target.value)
  }
  const onZipBlur = (event) => {
    setZipTouched(false)
  }

  const onZipChange = (event) => {
    setZipCode(event.target.value)
  }
  const onCityBlur = (event) => {
    setCityTouched(false)
  }

  const onCityChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <div>
      <form className='checkout-form' onSubmit={handleConfirm}>
        <div className={`control ${name ? '' : 'invalid'}`}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInput} onChange={onNameChange} onBlur={onNameBlur} value={name} />
          {!name && <p>Please enter a valid name</p>}
        </div>
        <div className={`control ${address ? '' : 'invalid'}`}>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' ref={addressInput} onChange={onAddressChange} onBlur={onAddressBlur} value={address} />
          {!address && <p>Please enter a valid Address</p>}
        </div>
        <div className={`control ${zipcode ? '' : 'invalid'}`}>
          <label htmlFor='zipcode'>Zip Code</label>
          <input type='text' id='zipcode' ref={zipcodeInput} onChange={onZipChange} onBlur={onZipBlur} value={zipcode} />
          {!zipcode && <p>Please enter a valid Zip Code</p>}
        </div>
        <div className={`control ${city ? '' : 'invalid'}`}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInput} onChange={onCityChange} onBlur={onCityBlur} value={city} />
          {!city && <p>Please enter a valid City</p>}
        </div>
        <div className='actions'>
          <button className='submit' type='submit'>Confirm</button>
          <button type='button' onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Checkout