import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// Components
import LocationCard from './LocationCard';
import Navbar from '../NavBar';
import Footer from '../../components/Footer';
import { getProperties } from '../../actions'

const useStyles = makeStyles(theme => ({
    gridItem: {
        padding: theme.spacing(2)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    heading:{
      margin: 20,
      marginTop: 50,
    },
    subheading:{
      marginLeft: 20,
    },
  }));

const Feed = props => { 
  const classes = useStyles();
  // const topRated = props.location.filter(stars => stars.rating >= 4.8);

  useEffect(() => {
  
    props.getProperties();
    console.log('props...', props)

  },[])

  return (
    <div className="Feed">
    <Navbar />

    {/* Cards unit */}
  <Container className={classes.cardGrid} maxWidth="md">
    <Typography className={classes.heading} variant="h5" align="left" component="h2">
      Top-Rated Locations
    </Typography>
    <Typography className={classes.subheading}variant="body2" align="left" color="textSecondary" component="h3">
      Explore some of the best-reviewed stays in the world
    </Typography>
    {/* <Grid container spacing={4}>      
      {topRated.map(item => {
        return (
          <Grid item className={classes.gridItem} s>
            <LocationCard 
              key={item.id} 
              propertyName={item.property_name}
              address={item.address}
              city={item.city}
              state={item.state}
              price={item.price}
              rating={item.rating}
              ownerId={item.owner_id}
              />
          </Grid>
        );
      })}
    </Grid> */}
  </Container>
  <Divider />
  <Container className={classes.cardGrid} maxWidth="md">
    <Typography className={classes.heading} variant="h5" align="left" component="h2">
      All Locations
    </Typography>
    <Grid container spacing={4}>      
      {props.properties.map(item => {
        return (
          <Grid item className={classes.gridItem} m>
            <LocationCard 
              key={item.id} 
              propertyName={item.property_name}
              image={item.image}
              address={item.address}
              city={item.city}
              state={item.state}
              price={item.price}
              rating={item.rating}
              ownerId={item.owner_id}
              />
          </Grid>
        );
      })}
    </Grid>
  </Container>
    {/* End Cards unit */}
    
  <Footer />
  </div>
);
}
const mapStateToProps = state => {
  return {
    properties: state.properties,
    isFetching: state.isFetching,
    isPosting: state.isPosting,
    isUpdating: state.isUpdating,
    isDeleting: state.isDeleting,
    error: state.error
  };
  
};

export default connect(mapStateToProps, { getProperties })(Feed);