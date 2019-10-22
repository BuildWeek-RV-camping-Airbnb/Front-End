import React from 'react'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Components
import LocationCard from './LocationCard';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '75px auto'
      },
    gridItem: {
        padding: theme.spacing(2)
      },
  }));

const LocationsGrid = props => { 
  const classes = useStyles();
  const topRated = props.location.filter(stars => stars.rating >= 4.8);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h5" align="left" component="h2">
          Top-Rated Locations
        </Typography>
        <Typography variant="body2" align="left" color="textSecondary" component="p">
          Explore some of the best-reveiwed stays in the world
        </Typography>
      <Grid container spacing={4}>      
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
      </Grid>
    </Container>

    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h5" align="left" component="h2">
        20+ places to stay
      </Typography>
      <Grid container spacing={4}>      
        {props.properties.map(item => {
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
      </Grid>
    </Container>
  );
}

export default LocationsGrid;

