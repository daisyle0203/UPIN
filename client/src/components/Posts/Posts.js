import React from "react"
import { CssBaseline, Grid } from "@material-ui/core"
import Post from "../Post/Post"

const cards = [1, 2, 3, 4, 5, 6];

function Posts() {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12}>
            <Post />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Posts
