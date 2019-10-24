import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Avatar,
  Paper,
  Typography,
  Box
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import { SearchInput } from '../../../../..';
import Modal from '@material-ui/core/Modal';
import Logo from '../../../../../../assets/Logo';

import { getPropertiesByUserID, postProperty } from '../../../../../../actions';
import { axiosWithAuth } from '../../../../../../utils/axiosWithAuth';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  btn: {
    backgroundColor: '#F26E22'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const PropertyToolbar = props => {
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [newProperty, setNewProperty] = useState({
    property_name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    image: '',
    price: ''
  });
  const [property, setProperty] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/properties`)
      .then(res => {
        console.log(res);
        setProperty(res.data);
      })
      .catch(err => {
        console.log('ERROR in GET post api', err.res);
      });
  }, []);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChanges = e => {
    setNewProperty({ ...newProperty, [e.target.name]: e.target.value });
  };

  const addProperty = e => {
    e.preventDefault();
    const userID = localStorage.getItem('id');
    console.log('Props Property...', { ...newProperty, owner_id: userID });
    props.postProperty({ ...newProperty, owner_id: userID });
    setNewProperty('');
  };

  return (
    <div>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          className={classes.btn}
          color="primary"
          variant="contained"
          onClick={handleOpen}
        >
          Add property
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Logo />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Property
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="pname"
                    name="property_name"
                    variant="outlined"
                    required
                    fullWidth
                    id="property_name"
                    label="Property Name"
                    autoFocus
                    onChange={handleChanges}
                    value={property.property_name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    value={property.description}
                    onChange={handleChanges}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    onChange={handleChanges}
                    value={property.address}
                  />
                </Grid>
                <Grid item xs={12} xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="city"
                    label="City"
                    type="city"
                    id="city"
                    value={property.city}
                    onChange={handleChanges}
                  />
                </Grid>
                <Grid item xs={12} xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="state"
                    label="State"
                    type="state"
                    id="state"
                    value={property.state}
                    onChange={handleChanges}
                  />
                </Grid>
                <Grid item xs={12} xs={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="price"
                    label="Price per night"
                    type="price"
                    id="price"
                    value={property.price}
                    onChange={handleChanges}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="image"
                        label="Image url"
                        type="image"
                        id="image"
                        value={property.image}
                        onChange={handleChanges}
                      />
                    </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={addProperty}
              >
                Add Property
              </Button>
            </form>
          </div>
        </Modal>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search property"
        />
      </div>
    </div>
  );
};

export default connect(
  null,
  {
    getPropertiesByUserID,
    postProperty
  }
)(PropertyToolbar);
