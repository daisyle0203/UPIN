import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import CssBaseline from "@material-ui/core/CssBaseline"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"

function App() {
  return (
    <>
    <Router>
    <CssBaseline />
      <Routes>
        <Route 
          path='/login'
          element={<Login />}
        />
      </Routes>
      <Header />
      <Hero />
      <Footer />
      </Router>
    </>
  )
}

export default App
