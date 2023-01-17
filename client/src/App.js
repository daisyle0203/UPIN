<<<<<<< HEAD
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import { Container, createTheme, ThemeProvider } from "@material-ui/core"
import Header from "../src/components/Header/Header"
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login/Login"
import SignUp from "./pages/Auth/SignUp/SignUp"
>>>>>>> origin

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  })

  return (
<<<<<<< HEAD
    <ApolloProvider client={client}>
      <div>
        <CssBaseline />
        <Router>
          <Navbar />
          <main className="content-container">
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
      </div>
    </ApolloProvider>
  );
=======
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
>>>>>>> origin
}

export default App;
