import React, { useState } from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { Container, createTheme, ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login/Login"
import SignUp from "./pages/Auth/SignUp/SignUp"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SingleReview from "./pages/SingleReview/SingleReview"
import Profile from "./pages/Profile/Profile"
import Review from "./pages/Review/Review"
import { indigo, red, teal } from "@material-ui/core/colors"

const httpLink = createHttpLink({
  uri: "/graphql",
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token")
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

// App setup
function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      type: mode,
      primary: {
        main: indigo[500],
        blue: teal[300],
      },
      secondary: {
        main: red[500],
      },
    },
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <Header setMode={setMode} mode={mode} />
        <Container>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/profiles/:username" element={<Profile />} />
              <Route path="/reviews" element={<Review />} />
              <Route path="/reviews/:reviewId" element={<SingleReview />} />
            </Routes>
          </Router>
        </Container>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
