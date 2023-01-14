import { Container } from "@material-ui/core"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login/Login"
import SignUp from "./pages/Auth/SignUp/SignUp"

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar />
        <main>
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
