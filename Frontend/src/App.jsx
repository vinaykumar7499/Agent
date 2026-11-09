import React from "react";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes path="/login" element={<Login/>}>

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App