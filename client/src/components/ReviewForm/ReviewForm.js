import React, { useState } from "react"
import {
  TextField,
  Button,
  Typography,
  Paper,
  CssBaseline,
  Container,
} from "@material-ui/core"
import useStyles from "./styles"
import Rating from "@material-ui/lab/Rating"
import { useMutation } from '@apollo/client'
import { ADD_REVIEW } from "../../utils/mutations" 

const handleClear = () => {}

const ReviewForm = () => {
  const classes = useStyles()

  const [addReview] = useMutation(ADD_REVIEW)
  const [form, setForm] = useState({
    company: '',
    role: '',
    interviewerInfo: '',
    interviewExperience: '',
    rating: 0
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    
  }
  console.log(form)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = await addReview({
      variables: form
    })
    console.log(data)
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleFormSubmit}
          >
            <Typography variant="h5" style={{ marginBottom: "20px" }}>
              Create a Review
            </Typography>
            <TextField
              name="company"
              variant="outlined"
              label="Company Name"
              fullWidth
              placeholder="Company Name" 
              onChange={handleChange}
            />
            <TextField
              name="role"
              variant="outlined"
              label="Role"
              fullWidth
              placeholder="Role"
              onChange={handleChange}
            />
            <TextField
              name="interviewerInfo"
              variant="outlined"
              label="Interviewer Info"
              fullWidth
              placeholder="Interviewer Info"
              onChange={handleChange}
            />
            <TextField
              name="interviewExperience"
              variant="outlined"
              label="Interview Experience"
              fullWidth
              multiline
              minRows={4}
              placeholder="Interview Experience"
              onChange={handleChange}
            />
            <Rating
              name="rating"
              precision={0.5}
              onChange={handleChange}
              size="large"
              className={classes.rating}
            />
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleClear}
              fullWidth
            >
              Clear
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default ReviewForm
