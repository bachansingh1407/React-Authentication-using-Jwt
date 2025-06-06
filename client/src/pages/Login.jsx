import React, { useState } from 'react'
import TextInput from '../components/TextInput'

const Login = () => {
    const [inputs, setInputs] = useState({
      username: '',
      email: '',
      password: ''
    })
  
    const handleChange = (e) => {
      const { name, value} = e.target
      setInputs((prev) =>( {...prev, [name]: value}))
    }
   return (
    <div className="auth-page">
      <div className="login-container">

        <h2 className='title'>Access your Account</h2>
        <form className='login-form'>
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
            placeholder='Password'
            name='password'
            type='password'
          />
          <button type='submit'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login