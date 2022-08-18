import './App.css';
import { baseUrl } from './api/Api'
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import AllRoutes from './components/routes/Routes';
import MainCourse from './components/maincourse/MainCourse';

function App() {



  return (
    <div className='App'>
      <AllRoutes />
    </div>
  )
}

export default App;