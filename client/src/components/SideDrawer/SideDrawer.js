import React from "react"
import clsx from "clsx"
import { Assignment, Group, Home } from "@material-ui/icons"
import ChatIcon from "@material-ui/icons/Chat"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Button,
  Divider,
} from "@material-ui/core"
import useStyles from "./styles"

export default function SideDrawer({ children }) {
  const classes = useStyles()
  const [state, setState] = React.useState({ left: false })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.title}>
        <ListItem>PAGES</ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItem button href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItem button href="/login">
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItem button href="/signup">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Sign up" />
          </ListItem>
        </ListItem>
        <ListItem>
          <ListItem button href="/dashboard">
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      {/* {["left", "right", "top", "bottom"].map((anchor) => ( */}
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>{children}</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
      {/* ))} */}
    </div>
  )
}
