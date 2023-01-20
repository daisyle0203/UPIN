import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import useStyles from "./styles"

export default function Footer({ description, title }) {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" >
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="https://www.linkedin.com/company/your-company" className={classes.links}>
                  <LinkedInIcon fontSize='medium'/>
                </Link>
              </Grid>
              <Grid item>
                <Link to="https://github.com/your-username" className={classes.links}>
                  <GitHubIcon fontSize='medium'/>
                </Link>
              </Grid>
              <Grid item>
                <Link to="https://twitter.com/your-username" className={classes.links}>
                  <TwitterIcon fontSize='medium'/>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©{" "}
          <Link color="inherit" href="#">
          UPIN All Rights Reserved.
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  )
}
