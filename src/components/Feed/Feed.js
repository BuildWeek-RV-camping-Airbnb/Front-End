import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// Components
import LocationCard from './LocationCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getUser, getProperties, postUser, postProperty, editProperty, deleteProperty } from '../../actions'


const useStyles = makeStyles(theme => ({
    root: {
        margin: '75px auto'
    },
    gridItem: {
        padding: theme.spacing(2)
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
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
    <Typography variant="h5" align="left" component="h2">
      Top-Rated Locations
    </Typography>
    <Typography variant="body2" align="left" color="textSecondary" component="p">
      Explore some of the best-reveiwed stays in the world
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

  <Container className={classes.cardGrid} maxWidth="md">
    <Typography variant="h5" align="left" component="h2">
      20+ places to stay
    </Typography>
    <Grid container spacing={4}>      
      {props.properties.map(item => {
        return (
          <Grid item className={classes.gridItem} m>
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