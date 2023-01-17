import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import useStyles from "./styles"

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        UPIN
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

function Footer() {
  const classes = useStyles()

  return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" >
          UPIN
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          All rights reserved.
        </Typography>
        <Copyright />
      </footer>
  )
}

export default Footer