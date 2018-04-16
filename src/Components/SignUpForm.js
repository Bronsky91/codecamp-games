import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SignUpForm = props => {
  const { handleSubmit } = props
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <h3 className='authheader' >Sign up to Record Your Highscores!</h3>
      <p>
        <label htmlFor="username">Username:</label>
        <Field name="username" component="input" type="text" />
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <Field name="password" component="input" type="password" />
      </p>
      <button type="submit">Sign-Up</button>
    </form>
    {props.authStatus}
    </div>
  )
}

SignUpForm = reduxForm({
  form: 'signup'
})(SignUpForm)

export default SignUpForm;