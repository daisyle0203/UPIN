import {
  Grid,
  Typography,
  Container,
  CssBaseline,
  Button,
} from "@material-ui/core"

function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <CssBaseline />
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
          style={{ marginTop: "65px" }}
        >
          Welcome to Re:View!
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Here you can find real reviews from people who have gone through the
          interview process at various companies. Our goal is to help job
          seekers make informed decisions by sharing valuable insights and
          experiences. Thank you for visiting and happy job hunting!
        </Typography>
        <Grid container spacing={2} justifyContent="center" style={{marginTop: "30px"}}>
          <Grid item>
            <Button href="/dashboard" variant="contained" color="secondary">
              Create A Review
            </Button>
          </Grid>
          <Grid item>
            <Button href="/dashboard" variant="outlined" color="secondary">
              View All Reviews
            </Button>
          </Grid>
        </Grid>
        <img
          src="https://blush.design/api/download?shareUri=Fa0J7qSKKgOmI--h&c=Clothing_0%7Eff4b33-0.2%7Eff4b33-0.4%7E02bad3&w=800&h=800&fm=png"
          alt="two people saying hi"
          style={{ width: "100%", height: "650px", marginTop: "70px" }}
        />
      </Container>
    </>
  )
}

export default Home
