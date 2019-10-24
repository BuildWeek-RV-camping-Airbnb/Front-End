import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

import { getUser } from '../../../../../../../actions'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  

  const classes = useStyles();

  

  useEffect(() => {
    const userID = localStorage.getItem('id');
    props.getUser(userID);
    console.log()
  }, [])



  return (
    <div
    >
      {/* <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        // src={props.user.avatar}
        to="/settings"
      /> */}
      <Typography
        className={classes.name}
        variant="h4"
      >
        {props.first_name}
      </Typography>
      {/* <Typography variant="body2">{user.bio}</Typography> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getUser })(Profile);
