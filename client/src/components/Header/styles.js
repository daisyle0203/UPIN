import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.blue,
  },
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}))