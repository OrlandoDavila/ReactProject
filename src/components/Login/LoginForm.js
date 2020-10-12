import React from 'react'

export default function LoginForm(props) {
  const {
    values,
    submit,
    inputChange,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  return (
    <form className='formContainer' onSubmit={onSubmit}>
      <div className='form-group submit'>

        <div className='errors'>
         
          <div>{errors.username}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h1>Login</h1>

        <label className="username">Username
          <input
            value={values.username}
            onChange={onInputChange}
            name='username'
            type='text'
          />
        </label><br/>

        <label className="password">Password
          <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='password'
          />
        </label><br/>
      </div>

        <div className="createAccount">
        <button type="submit">Login</button>
        </div>
    </form>
  )
}