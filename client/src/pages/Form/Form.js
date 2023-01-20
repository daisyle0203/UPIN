import React, { useState} from "react"
import { TextField, Button, Typography, Paper, IconButton } from "@material-ui/core"
import useStyles from "./styles"
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';


const handleChange = (event) => {}

const handleFormSubmit = async (event) => {}

const handleClear = () => {}

const starFill = () => {
  console.log("Boom!")
}



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
          name="Review"
          variant="outlined"
          label="Review"
          fullWidth
          multiline
          minRows={4}
          value="Review"
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
        <IconButton onClick={() => setClicked(true)}>
          {clicked ? <StarPurple500OutlinedIcon /> : <StarBorderOutlinedIcon />}
        </IconButton>
        <IconButton onClick={() => setClicked(true)}>
          {clicked ? <StarPurple500OutlinedIcon /> : <StarBorderOutlinedIcon />}
        </IconButton>
        <IconButton onClick={() => setClicked(true)}>
          {clicked ? <StarPurple500OutlinedIcon /> : <StarBorderOutlinedIcon />}
        </IconButton>
        <IconButton onClick={() => setClicked(true)}>
          {clicked ? <StarPurple500OutlinedIcon /> : <StarBorderOutlinedIcon />}
        </IconButton>
        <IconButton onClick={() => setClicked(true)}>
          {clicked ? <StarPurple500OutlinedIcon /> : <StarBorderOutlinedIcon />}
        </IconButton>
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
