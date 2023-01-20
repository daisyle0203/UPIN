import React, { useState} from "react"
import { TextField, Button, Typography, Paper, IconButton } from "@material-ui/core"
import useStyles from "./styles"
import { Rating } from '@mui/material';


const handleChange = (event) => {}

const handleFormSubmit = async (event) => {}

const handleClear = () => {}

const Form = () => {
  const classes = useStyles()

  const [clicked, setClicked] = useState();

  return (
    
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleFormSubmit}
      >
        <Typography variant="h5">Create a Review</Typography>
        <TextField
          name="company name"
          variant="outlined"
          label="Company Name"
          fullWidth
          value="Company Name"
          onChange={handleChange}
        />
        <TextField
          name="Interview Experience"
          variant="outlined"
          label="Interview Experience"
          fullWidth
          multiline
          minRows={4}
          value="Interview Experience"
          onChange={handleChange}
        />
        <TextField
          name="Role"
          variant="outlined"
          label="Role"
          fullWidth
          value="Role"
          onChange={handleChange}
        />
        <TextField
          name="Interviewer Info"
          variant="outlined"
          label="Interviewer Info"
          fullWidth
          value="Interviewer Info"
          onChange={handleChange}
        />
        <Rating
          name='simple-controlled'
          precision={0.5}
          value={clicked}
          onChange={(event, newValue) => {
            setClicked(newValue);
          }}
          size='large'
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
  )
}

export default Form
