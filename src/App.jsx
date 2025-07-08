import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { HashLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return loading ? (
    <div className="w-full h-screen flex items-center justify-center">
        <HashLoader color="#1447e6" />
    </div>

  ) : (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App
