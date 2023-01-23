import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import Typography from "@material-ui/core/Typography"
import Rating from "@material-ui/lab/Rating"
import { red } from "@material-ui/core/colors"
import { Favorite, FavoriteBorder } from "@material-ui/icons"
import {
  Avatar,
  CardHeader,
  Checkbox,
  IconButton,
  Link,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function OutlinedCard() {
  const classes = useStyles()
  const [value, setValue] = useState(4)

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Amazon"
        subheader="January 22, 2023"
      />
      <CardContent>
        <Typography variant="body2" paragraph>
          Company: Amazon
        </Typography>
        <Typography variant="body2" paragraph>
          Role: Software Engineer
        </Typography>
        <Typography variant="body2" paragraph>
          Interviewer Info: Amanda's LinkedIn Link
        </Typography>
        <Typography variant="body2" paragraph>
          Interview Experience: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="body2" paragraph>
          Overall Rating:
        </Typography>
        <Rating name="read-only" value={value} readOnly />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Link size="small">
          2 comments
        </Link>
      </CardActions>
    </Card>
  )
}
