import Login from './pages/Login.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import React from "react";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App