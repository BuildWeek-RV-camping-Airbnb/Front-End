import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  footer: {
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6),
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className="Feed">
      <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          RVnB
        </Link>{' '}
          2019
      </Typography>
      </footer>
    </div>
  );
}

export default Footer;