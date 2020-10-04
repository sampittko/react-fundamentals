// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUsername(value);
  }

  const isValid = value => value.toLowerCase() === value;

  const handleChange = (e) => {
    const newValue = e.target.value;

    setValue(newValue)

    setError(isValid(newValue) ? null : 'Username has to be in lowercase');
  }

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
        <label htmlFor="username">Username:</label>
        <input id="username" value={value} onChange={handleChange} type="text" />
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
