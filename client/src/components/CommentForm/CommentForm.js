import React, { useState } from "react"
import {
  Link,
  Paper,
  TextField,
  Typography,
  Button,
  CssBaseline,
  Grid,
  Card,
  Container,
} from "@material-ui/core"
import { useMutation } from "@apollo/client"
import { ADD_COMMENT } from "../../utils/mutations"
import Auth from "../../utils/auth"

const CommentForm = ({ reviewId, refetch }) => {
  const [commentText, setCommentText] = useState("")
  const [addComment, { error }] = useMutation(ADD_COMMENT)

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await addComment({
        variables: {
          reviewId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      })

      setCommentText("")
    } catch (err) {
      console.error(err)
    }
    refetch()
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value)
    }
  }

  return (
    <>
      <CssBaseline />
      <Typography variant="h6">
        What are your thoughts on this review?
      </Typography>

      {Auth.loggedIn() ? (
        <Container
          component={Card}
          maxWidth="xs"
          style={{ padding: "20px", marginTop: "10px" }}
        >
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  name="commentText"
                  placeholder="Add your comment..."
                  value={commentText}
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  type="submit"
                >
                  Add Comment
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      ) : (
        <Typography variant="h6">
          You need to be logged in to share your reviews. Please{" "}
          <Link href="/login">login</Link> or{" "}
          <Link href="/signup">signup.</Link>
        </Typography>
      )}
      {error && <Typography variant="body2">{error.message}</Typography>}
    </>
  )
}

export default CommentForm
