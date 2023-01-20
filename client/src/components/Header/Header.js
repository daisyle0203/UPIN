import {
  Badge,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { AccountCircle } from "@material-ui/icons"
import NotificationsIcon from "@material-ui/icons/Notifications"
import SideDrawer from "../SideDrawer/SideDrawer"
import Button from "@material-ui/core/Button"
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
          RE:VIEW
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
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
