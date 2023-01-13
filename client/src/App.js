import { Container } from "@material-ui/core"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import Navbar from "./components/Navbar/Navbar"


import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"

function App() {
  return (
    <>
      <Router>
        <Navbar />
  
        <Container maxWidth="lg">
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
