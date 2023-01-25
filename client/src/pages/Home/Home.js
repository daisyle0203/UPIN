import {
  Grid,
  Typography,
  Container,
  CssBaseline,
  Button,
} from "@material-ui/core"
import Auth from "../../utils/auth"

function Home() {
  const user = Auth.loggedIn() && Auth.getProfile().data.username

  return (
    <>
      <Container maxWidth="lg">
        <CssBaseline />
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to Re:View!
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Here you can find real reviews from people who have gone through the
          interview process at various companies. Our goal is to help job
          seekers make informed decisions by sharing valuable insights and
          experiences. Thank you for visiting and happy job hunting!
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{ marginTop: "30px" }}
        >
          <Grid item>
            <Button
              href={`/profiles/${user}`}
              variant="contained"
              color="secondary"
            >
              Create A Review
            </Button>
          </Grid>
          <Grid item>
            <Button href="/reviews" variant="outlined" color="secondary">
              View All Reviews
            </Button>
          </Grid>
        </Grid>
      </Container>
      <img
        src="https://blush.design/api/download?shareUri=Fa0J7qSKKgOmI--h&c=Clothing_0%7Eff4b33-0.2%7Eff4b33-0.4%7E02bad3&w=800&h=800&fm=png"
        alt="two people saying hi"
        style={{ width: "100%", height: "100%" }}
      />
    </>
  )
}

export default Home
