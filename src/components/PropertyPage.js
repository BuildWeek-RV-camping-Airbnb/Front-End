import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const useStyles = makeStyles(theme => ({
  heroContent: {
    background: 'imgurl',
  }
}));


export default function PropertyPage() {
  const classes = useStyles();

  return (
    <div className="PropertyPage">
      <NavBar />

        {/* Hero unit */}
        <div className={classes.hero}>
          <Container />
        </div>
          {/* End hero unit */}


        <Container className={classes.cardGrid} >
        <Grid item xs={6}>
          <div className={classes.info} />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.form} />
        </Grid>
        </Container>


      <Footer />
    </div>
  );
}