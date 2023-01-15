import { makeStyles } from "@material-ui/core/styles"
import { blue, amber } from "@material-ui/core/colors"

export default makeStyles((theme) => ({
    heroContent: {
      backgroundColor: blue[100],
      padding: theme.spacing(8, 0, 6),
      marginTop: 16,
      borderRadius: theme.shape.borderRadius * 6,
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }))