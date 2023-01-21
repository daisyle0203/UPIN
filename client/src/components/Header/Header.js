import { Divider, IconButton, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import SideDrawer from "../SideDrawer/SideDrawer"
import Button from "@material-ui/core/Button"
import FindReplaceIcon from "@material-ui/icons/FindReplace"
import useStyles from "./styles"

function Header() {
  const classes = useStyles()

  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Typography variant="h6" className={classes.title}>
          <FindReplaceIcon />
          Re:View
        </Typography>
        <Button href="/login" variant="contained" color="primary">
          Log In
        </Button>
        <Button
          href="signup"
          variant="outlined"
          color="primary"
          style={{ marginLeft: "10px" }}
        >
          Sign up
        </Button>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>INTERVIEW INSIGHT PLATFORM</Toolbar>
    </>
  )
}

export default Header
