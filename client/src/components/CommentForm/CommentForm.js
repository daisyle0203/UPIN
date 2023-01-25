import React, { useState } from "react"
import { Link, Paper, TextField, Typography } from "@material-ui/core"
import { useMutation } from "@apollo/client"

import { ADD_COMMENT } from "../../utils/mutations"

import Auth from "../../utils/auth"
import { Button } from "bootstrap"

const CommentForm = ({ reviewId }) => {
  const [commentText, setCommentText] = useState("")
  const [characterCount, setCharacterCount] = useState(0)

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
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value)
      setCharacterCount(value.length)
    }
  }

  return (
    <>
      <Typography variant="h6">
        What are your thoughts on this review?
      </Typography>

      {Auth.loggedIn() ? (
        <Paper>
          <Typography
            variant="h6"
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </Typography>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
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
        <Typography>
          You need to be logged in to share your reviews. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </Typography>
      )}
    </>
  )
}

export default CommentForm
