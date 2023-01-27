import {
  Card,
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core"
import React from "react"

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <Typography variant="h6">No Comments Yet</Typography>
  }

  return (
    <>
      <CssBaseline />
      <Typography variant="h6">Comments</Typography>
      <Grid container spacing={4}>
        {comments &&
          comments.map((comment) => (
            <Grid item key={comment._id} xs={12}>
              <Card>
                  <Typography variant="h7">
                    {comment.commentAuthor} commented{" "}
                  </Typography>
                  <Typography style={{ fontSize: "0.825rem" }}>
                    on {comment.createdAt}
                  </Typography>
                <Typography paragraph>{comment.commentText}</Typography>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default CommentList
