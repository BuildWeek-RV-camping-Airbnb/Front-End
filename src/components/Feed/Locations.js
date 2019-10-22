import React from 'react'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

  return (
    <Grid container className={classes.root} justify="center">
      {props.XYZ.map(item => {
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
  );
}

export default LocationsGrid;

