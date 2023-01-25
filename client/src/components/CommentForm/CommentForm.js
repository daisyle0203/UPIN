import React, { useState } from "react"
import { Link, Paper, TextField, Typography, Button, CssBaseline } from "@material-ui/core"
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
        <Paper>
          <form
            onSubmit={handleFormSubmit}
          >
            <TextField
              name="commentText"
              placeholder="Add your comment..."
              value={commentText}
              className="form-input w-100"
              style={{ lineHeight: "1.5", resize: "vertical" }}
              onChange={handleChange}
            ></TextField>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
            >
              Add Comment
            </Button>
          </form>
        </Paper>
      ) : (
        <Typography variant="h6">
          You need to be logged in to share your reviews. Please{" "}
          <Link href="/login">login</Link> or <Link href="/signup">signup.</Link>
        </Typography>
      )}
    </>
  )
}

export default CommentForm
