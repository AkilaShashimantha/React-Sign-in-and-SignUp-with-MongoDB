import React from "react";
import Login from './Login'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup(){

const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()

const handleSubmit =(e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/register',{name,email,password})
    .then(result => console.log(result))
       navigate('/login')
    .catch(err=> console.log(err))
}

return(

<div className="container-fluid">
    <div className="row">
        <div className="col-12 d-flex justify-content-center">
            <div className="col-8 col-lg-3">

            <div className="container mt-5">
      <h2 className="text-center mb-4">Sign Up</h2>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>

    </div>

    <div className="text-center mt-3">
        <p>Already have an account? <Link to="/login" className="btn btn-link">Login here</Link></p>
      </div>

            </div>
        </div>
    </div>
</div>

)


}
export default Signup;
