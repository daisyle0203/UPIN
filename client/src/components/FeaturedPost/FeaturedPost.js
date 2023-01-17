import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core"

import useStyles from "./styles"

const FeaturedPost = () => {
  const classes = useStyles()

  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5" component="h2">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }}>
          Read More..
        </Button>
      </CardActions>
    </Card>
  )
}

export default FeaturedPost
