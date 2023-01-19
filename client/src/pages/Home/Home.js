import { Grid, makeStyles } from "@material-ui/core"
import PostCard from "../../../src/components/PostCard/PostCard"
import { featuredPosts, sidebar } from "../../Data/Data"
import Main from "../../components/Main/Main"
import Sidebar from "../../components/Sidebar/Sidebar"
import FeaturedPost from "../../components/FeaturedPost/FeaturedPost"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

function Home() {
  const classes = useStyles()

  return (
    <>
    <Header />
      <FeaturedPost />
      <br />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="From the firehose" />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
      <Footer
        title="UPIN"
        description="Something here to give the footer a purpose!"
      />
    </>
  )
}

export default Home
