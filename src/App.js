import { useState } from 'react'

const App = () => {
  const [error, setError] = useState(false)

  const validateEmail = event => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    setError(!emailPattern.test(String(event.target.value).toLowerCase()))
  }

  return (
    <main>
      <h1>Register your interest</h1>
      <p className="subtitle">Register for updates using the form below</p>
      <form>
        <div className="formField">
          <label htmlFor="firstNameFld">Name</label>
          <div className="input">
            <input type="text" id="firstNameFld" name="firstNameFld" aria-labelledby="firstNameFld firstNameSubLabel" />
            <p id="firstNameSubLabel">First Name</p>
          </div>
          <div className="input">
            <input type="text" id="surnameFld" name="surnameFld" aria-labelledby="surnameSubLabel" />
            <p id="surnameSubLabel">Last Name</p>
          </div>
        </div>
        <div className="formField">
          <label htmlFor="emailFld">Email <span aria-label="required" className="required">*</span></label>
          <div className="input">
            <input type="text" id="emailFld" name="emailFld" onBlur={validateEmail} className={error ? "error" : undefined} />
            {error && <p role="alert" className="error">Please enter a valid email address</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
