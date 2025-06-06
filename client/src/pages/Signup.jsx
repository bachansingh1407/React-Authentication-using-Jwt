import React, { useState } from 'react'
import './auth.css'
import TextInput from '../components/TextInput'

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs((prev) => ({...prev, [name]:value}))
  }
  return (
    <div className="auth-page">
      <div className="signup-container">

        <h2 className='title'>Create your Account</h2>
        <form className='signup-form'>
          <TextInput
            label="Username"
            value={inputs.username}
            onChange={handleChange}
            required={true}
            placeholder='John Doe'
            name='username'
            type='text'
          />
          <TextInput
            label="Email"
            value={inputs.email}
            onChange={handleChange}
            required={true}
            placeholder='JohnDoeDeveloper@gmail.com'
            name='email'
            type='email'
          />
          <TextInput
            label="Password"
            value={inputs.password}
            onChange={handleChange}
            required={true}
            placeholder='Create Password'
            name='password'
            type='password'
          />
          <button type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup