import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// Material UI
import { makeStyles, fade } from '@material-ui/core/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

// Assets
import RvLogo from '../../../../../assets/RvLogo';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    backgroundColor: '#034AA6'
  },
  flexGrow: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <RvLogo />
        </RouterLink>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Button color="inherit">Sign out</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
