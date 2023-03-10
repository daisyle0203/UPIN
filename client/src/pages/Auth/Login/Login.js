import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "../../../utils/mutations"
import Auth from "../../../utils/auth"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import useStyles from "./styles"

export default function LogIn() {
  const classes = useStyles()
  const [formState, setFormState] = useState({ email: "", password: "" })
  const [login, { error }] = useMutation(LOGIN_USER)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    try {
      const { data } = await login({
        variables: { ...formState },
      })

      Auth.login(data.login.token)
    } catch (e) {
      console.error(e)
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    })
  }

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          {error && (
            <Typography variant="body2" className={classes.customError}>
              {error.message}
            </Typography>
          )}
        </Paper>
      </Container>
        <img
          src="https://blush.design/api/download?shareUri=BYssPFILduU6Wdl1&c=Clothing_0%7Eff8333-0.2%7Eff8333-0.3.0.0.2.0%7Eff8333&w=800&h=800&fm=png"
          alt="two people on a call"
          style={{ width: "100%", height: "100%" }}
        />
    </>
  )
}
