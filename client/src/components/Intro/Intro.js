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
          Welcome to UPIN!
        </Typography>
        <Typography variant="h5" component="h2">
          Here you can find real reviews from people who have gone through the
          interview process at various companies. Our goal is to help job
          seekers make informed decisions by sharing valuable insights and
          experiences. Thank you for visiting and happy job hunting!
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="/dashboard" variant="contained" color="secondary">
          Create A Review
        </Button>
      </CardActions>
    </Card>
  )
}

export default FeaturedPost
