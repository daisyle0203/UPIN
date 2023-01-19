import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import useStyles from "./styles"

function Header() {
  const classes = useStyles()

  return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            UPIN
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Welcome to UPIN! Here you can find real reviews from people who
            have gone through the interview process at various companies. Our
            goal is to help job seekers make informed decisions by sharing
            valuable insights and experiences. Thank you for visiting and happy
            job hunting!
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button href="/login" variant="contained" color="primary">
                  Log In
                </Button>
              </Grid>
              <Grid item>
                <Button href="signup" variant="outlined" color="primary">
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
  )
}

export default Header
