import { Card, CardHeader, Grid, Typography } from "@material-ui/core"
import React from "react"

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <Typography variant="h6">No Comments Yet</Typography>
  }

  return (
    <>
      <Typography variant="h6" style={{ borderBottom: "1px dotted #1a1a1a" }}>
        Comments
      </Typography>
      <Grid container spacing={4}>
        {comments &&
          comments.map((comment) => (
            <Grid item key={comment._id} xs={12}>
              <Card variant="outline">
                <CardHeader>
                  {comment.commentAuthor} commented{" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {comment.createdAt}
                  </span>
                </CardHeader>
                <Typography paragraph>{comment.commentText}</Typography>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  )
}

export default CommentList
