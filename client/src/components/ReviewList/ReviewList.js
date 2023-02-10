import React from "react"
import {
  Typography,
  Link,
  Grid,
  CssBaseline,
  Avatar,
  CardHeader,
  IconButton,
  Tooltip,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import DeleteIcon from "@material-ui/icons/Delete"
import Rating from "@material-ui/lab/Rating"
import { red } from "@material-ui/core/colors"
import { useMutation } from "@apollo/client"
import { REMOVE_REVIEW } from "../../utils/mutations"
import Auth from "../../utils/auth"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

const ReviewList = ({ refetch, reviews }) => {
  const classes = useStyles()
  const [removeReview, { error }] = useMutation(REMOVE_REVIEW)

  const handleDelete = (reviewId) => {
    console.log(reviewId)
    removeReview({
      variables: { reviewId },
    })
    refetch()
  }

  if (!reviews?.length) {
    return <Typography variant="h6">No Reviews Yet</Typography>
  }

  return (
    <>
      <CssBaseline />
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
                    Overall Rating:
                  </Typography>
                  <Rating name="read-only" value={review.rating} readOnly />
                </CardContent>
                <CardActions disableSpacing>
                  <Tooltip title="Comment">
                    <IconButton
                      aria-label="comment"
                      href={`/reviews/${review._id}`}
                    >
                      <ChatBubbleOutlineIcon />
                    </IconButton>
                  </Tooltip>
                  <Link size="small" href={`/reviews/${review._id}`}>
                    {review.comments?.length
                      ? `Viewing ${review.comments.length} ${
                          review.comments.length === 1 ? "comment" : "comments"
                        }`
                      : "There is no comment yet. Be the first one to comment!"}
                  </Link>
                  {Auth.loggedIn() &&
                    Auth.getProfile().data.username === review.reviewAuthor && (
                      <Tooltip title="Delete">
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDelete(review._id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                </CardActions>
              </Card>
              {error && (
                <Typography variant="body2" className={classes.customError}>
                  {error.message}
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ReviewList
