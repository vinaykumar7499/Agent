import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { me } from './features/auth.js'
import { setUserData } from './redux/userSlice.js'
import Agents from './pages/Agents.jsx'
import Integration from './pages/Integration.jsx'
import CreateAgent from './pages/CreateAgent.jsx'

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
        <Route path="/login" element={userData ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/" element={userData ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/agents" element={userData ? <Agents /> : <Navigate to="/login" replace />} />
        <Route path="/integration" element={userData ? <Integration /> : <Navigate to="/login" replace />} />
        <Route path="/agents/create" element={userData ? <CreateAgent /> : <Navigate to="/login" replace />} />
        <Route path="/agent/new" element={userData ? <Home /> : <Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App