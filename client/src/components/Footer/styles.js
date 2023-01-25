import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.blue,
    padding: theme.spacing(3, 0),
    marginTop: theme.spacing(5),
    position: "absolute",
    // bottom: 0,
    width: "100%",
  },
  links: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#ffc107",
    },
    marginLeft: "15px",
  },
}))
