

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

 function Login(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:3001/login',{email,password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/')
            }
        })
        
        .catch(err=> console.log(err))
    }


return(
    <div className="container-fluid">
   <div className ="row">
<div className='col-12 d-flex justify-content-center'>

<div className="col-8 col-lg-3 mt-5">
    
<div className="col-12 d-flex justify-content-center"><h1 className="text-primary">Login</h1></div>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="Enter email" 
        onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" placeholder="Enter password" 
        onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    <div className="text-center mt-3">
        <p>Already have an account? <Link to="/register" className="btn btn-link">Register here</Link></p>
      </div>

</div>

</div>
   </div>
  </div>
)

}

export default Login;