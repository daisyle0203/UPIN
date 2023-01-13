import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import useStyles from "./styles"

function Header() {
  const classes = useStyles()

  return (
    <>
        {/* Header */}
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
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Log In
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Go to Map
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    </>
  )
}

export default Header
