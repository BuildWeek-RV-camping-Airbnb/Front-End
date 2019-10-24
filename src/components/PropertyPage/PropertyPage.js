import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import DatePicker from '../../components/PropertyPage/DatePicker';

const useStyles = makeStyles(theme => ({
  heroContent: {
    // background: {props.image},
  },
  cardGrid: {

  },

  form:{
    flexDirection: column,
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
          <div className={classes.info}>

          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.form}>
            <
            <DatePicker />
          </div>
        </Grid>
      </Container>


      <Footer />
    </div>
  );
}
