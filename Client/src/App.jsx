import { useState } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'

function App() {

  return (
  <div>

<BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
         
        </Routes>
      </BrowserRouter>
  </div>
  )
}

export default App
