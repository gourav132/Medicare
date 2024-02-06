import React from 'react'

export default function LoginPage() {
  return (
    <div>
        <h1>Log In</h1>
        <h6>Not registered yet? Register here.</h6>

        <div>
            <p>Email Address</p>
            <input type="email" placeholder="use private email address" />
        </div>

        <button>Cancel</button>
        <button>Submit</button>
    </div>
  )
}
