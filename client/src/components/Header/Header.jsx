import React from "react"
import AppBar from "@material-ui/core/AppBar"
import RoomIcon from "@material-ui/icons/Room"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import useStyles from "./styles"

export default function Album() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <RoomIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            UPIN
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
