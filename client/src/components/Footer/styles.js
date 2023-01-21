import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
    position: 'fixed',
    bottom: 0,
    width: '100%',
  
  },
  links: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#ffc107',
    },
    marginLeft: '15px',
  },
}))