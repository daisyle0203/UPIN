import React, { useState } from "react"
import {
  Typography,
  Link,
  Grid,
  CssBaseline,
  Avatar,
  CardHeader,
  Checkbox,
  IconButton,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import DeleteIcon from "@material-ui/icons/Delete"
import Rating from "@material-ui/lab/Rating"
import { red } from "@material-ui/core/colors"
import { Favorite, FavoriteBorder } from "@material-ui/icons"
import { useMutation } from "@apollo/client"
import { REMOVE_REVIEW } from "../../utils/mutations"
import { QUERY_USER, QUERY_ME } from "../../utils/queries"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const ReviewList = ({
  reviews,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  const classes = useStyles()
  const [value, setValue] = useState(4)
  const [removeReview, { error }] = useMutation(REMOVE_REVIEW, {
    update(cache, { data: { removeReview } }) {
      try {
        const { reviews } = cache.readQuery({ query: QUERY_USER })
        cache.writeQuery({
          query: QUERY_USER,
          data: { reviews: reviews.filter((r) => r._id !== removeReview._id) },
        })
      } catch (e) {
        console.error(e)
      }

      const { me } = cache.readQuery({ query: QUERY_ME })
      cache.writeQuery({
        query: QUERY_ME,
        data: {
          me: {
            ...me,
            reviews: me.reviews.filter((r) => r._id !== removeReview._id),
          },
        },
      })
    },
  })

  const handleDelete = (reviewId) => {
    console.log(reviewId)
    removeReview({
      variables: { reviewId },
    })
  }

  if (!reviews?.length) {
    return <Typography variant="h6">No Reviews Yet</Typography>
  }

  return (
    <>
      <CssBaseline />
      {showTitle && <Typography variant="h6">{title}</Typography>}
      {reviews && (
        <Grid container spacing={4}>
          {reviews.map((review) => (
            <Grid item key={review._id} xs={12}>
              <Card className={classes.root} variant="outlined">
                <CardHeader
                  avatar={
                    <Avatar aria-label="avatar" className={classes.avatar}>
                      {review.reviewAuthor[0].toUpperCase()}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={review.reviewAuthor}
                  subheader={review.createdAt}
                />
                <CardContent>
                  <Typography variant="body2" paragraph>
                    Company: {review.company}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Role: {review.role}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Interviewer Info: {review.interviewerInfo}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Interview Experience: {review.interviewExperience}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Overall Rating: {review.overallRating}
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
                  <Link size="small">2 comments</Link>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(review.reviewId)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ReviewList
