import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// Components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import DatePicker from '../../components/PropertyPage/DatePicker';
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  heroContent: {
    height: '40vh'
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
        </div>
          {/* End hero unit */}


      <Container className={classes.cardGrid} >
        <Grid item xs={6}>
          <div className={classes.info}>

          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.form}>
            <div className={classes.formHeader}>
              <Typography className={classes.heading} variant="h5" align="left">
                <span><h2>${props.rate} </h2><h4>per night</h4></span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Star />
                {props.rating}
              </Typography>
            </div>
            <Divider />
            <DatePicker />
          </div>
        </Grid>
      </Container>


      <Footer />
    </div>
  );
}
