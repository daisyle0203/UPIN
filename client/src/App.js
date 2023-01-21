import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Container, createTheme, ThemeProvider } from "@material-ui/core" 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Form from "./pages/Form/Form";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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

// App setup
function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    }
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <Header />
      <Container>
        <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Form />} />
              </Routes>
        </Router>
        </Container>
        <Footer />
        </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
