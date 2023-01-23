import React from "react"
import { Divider, IconButton, Switch, Toolbar, Link } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import SideDrawer from "../SideDrawer/SideDrawer"
import Button from "@material-ui/core/Button"
import FindReplaceIcon from "@material-ui/icons/FindReplace"
import Brightness2Icon from "@material-ui/icons/Brightness2"
import Auth from "../../utils/auth"
import useStyles from "./styles"

function Header({ setMode, mode }) {
  const classes = useStyles()
  const logout = (event) => {
    event.preventDefault()
    Auth.logout()
  }

  return (
    <>
      <Toolbar className={classes.header}>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Link href="/" className={classes.title}>
          <FindReplaceIcon />
          Re:View
        </Link>
        {Auth.loggedIn() ? (
          <>
            <Button href="/me" variant="contained" color="primary">
              {Auth.getProfile().data.username}'s Profile
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={logout}
              className={classes.logout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button href="/login" variant="contained" color="primary">
              Log In
            </Button>
            <Button
              href="signup"
              variant="outlined"
              color="primary"
              className={classes.signup}
            >
              Sign up
            </Button>
          </>
        )}
        <Brightness2Icon style={{ marginLeft: "10px" }} />
        <Switch
          onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
        />
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>INTERVIEW INSIGHT PLATFORM</Toolbar>
    </>
  )
}

export default Header
