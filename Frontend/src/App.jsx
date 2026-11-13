import Login from './pages/Login.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useEffect } from 'react'
import { me } from './features/auth.js'

const App = () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await me()
        console.log(data)
      } catch (err) {
        console.log(me, 'me error')
      }
    }

    fetchUser()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App