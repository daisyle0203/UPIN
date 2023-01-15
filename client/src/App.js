import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import { Container, createTheme, ThemeProvider } from "@material-ui/core"
import Header from "../src/components/Header/Header"
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login/Login"
import SignUp from "./pages/Auth/SignUp/SignUp"

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App
