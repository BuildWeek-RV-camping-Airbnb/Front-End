import React, { useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import {
  getUser,
  getPropertiesByUserID,
  postUser,
  postProperty,
  editProperty,
  deleteProperty
} from '../../../../actions';

import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { PropertyToolbar, PropertyCard } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const PropertyList = props => {
  const classes = useStyles();

  useEffect(() => {
    const userID = localStorage.getItem('id');
    props.getPropertiesByUserID(userID);
  }, []);

  return (
    <div className={classes.root}>
      <PropertyToolbar />
      <div className={classes.content}>
      <Grid container spacing={4}>      
        {props.properties && props.properties.map(item => {
          return (
            <Grid item className={classes.gridItem} s>
              <PropertyCard 
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
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
    </div>
  );
};

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

export default connect(
  mapStateToProps,
  {
    getUser,
    getPropertiesByUserID,
    postProperty,
    editProperty,
    deleteProperty
  }
)(PropertyList);
