import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Container, createTheme, ThemeProvider } from "@material-ui/core"
import Header from "../src/components/Header/Header"
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login/Login"
import SignUp from "./pages/Auth/SignUp/SignUp"

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, {headers})=> {
  const token = localStorage.getItem("id_token")
  return {
    headers: {
      ...headers, 
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
