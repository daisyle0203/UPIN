import { makeStyles } from "@material-ui/core/styles"
import { indigo, grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  footer: {
    backgroundColor: indigo[500],
    padding: theme.spacing(6),
    position: "relative",
    bottom: 0,
    left: 0,
    color: grey[50]
    
  },
}))
