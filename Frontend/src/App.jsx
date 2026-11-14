import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { me } from './features/auth.js'
import { setUserData } from './redux/userSlice.js'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await me()
        dispatch(setUserData(data))
      } catch (err) {
        console.log(me, 'me error')
      }
    }

    fetchUser()
  }, [dispatch])
  const { userData } = useSelector(state => state.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={userData ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App