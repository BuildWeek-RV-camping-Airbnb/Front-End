import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// Components
import LocationCard from '../../components/Feed/LocationCard';
import NavBar from '../NavBar';
import Footer from '../../components/Footer';
import { getProperties } from '../../actions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '75px auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  gridItem: {
    padding: theme.spacing(2)
  },
  textField: {
    paddingBottom: '1.5rem',
    width: '25rem',
    color: '#A4A4A4'
  },
  header: {
      marginLeft: '5hw',
      marginRight: '5hw',
  },
  heading: {
    margin: 20,
    marginTop: 50,
  },
  subheading: {
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
    <div className={classes.root}>
      <NavBar />

      <div className={classes.content}>

        <Container className={classes.header}>
          <Typography className={classes.heading} variant="h5" align="left" component="h2">
            Top-Rated Locations
          </Typography>
          <Typography className={classes.subheading}variant="body2" align="left" color="textSecondary" component="h3">
            Explore some of the best-reviewed stays in the world
          </Typography>
        </Container>

        <Grid container spacing={4} justify="center">      
            {/* {props.properties.map(item => {
              return (
                <Grid item className={classes.gridItem} s>
                  <LocationCard 
                    key={item.id}
                    id={item.id} 
                    propertyName={item.property_name}
                    description={item.description}
                    address={item.address}
                    city={item.city}
                    state={item.state}
                    price={item.price}
                    rating={item.rating}
                    ownerId={item.owner_id}
                    />
                </Grid>
              );
            })}*/}
          </Grid> 

        <Divider />

        <Container className={classes.header}>
            <Typography className={classes.heading} variant="h5" align="left" component="h2">
              All Locations
            </Typography>
          </Container>

        <Grid container spacing={4} justify="center">      
            {props.properties.map(item => {
              return (
                <Grid item className={classes.gridItem} s>
                  <LocationCard 
                    key={item.id}
                    id={item.id} 
                    propertyName={item.property_name}
                    description={item.description}
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

    </div>

    <Footer />

    </div>
  );}
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