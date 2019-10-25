import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  Typography,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  TextField,
  Button,
  Divider
} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import PropertyToolbar from '../PropertyToolbar';
import Logo from '../../../../../../assets/Logo';

import {
  editProperty,
  deleteProperty,
  getPropertiesByUserID
} from '../../../../../../actions';

import Star from '../../../../../../assets/icons/Star';
import Heart from '../../../../../../assets/icons/Heart';

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
  root: {
    padding: '0px'
  },
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    // border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  card: {
    minWidth: 365,
    maxWidth: 365,
    minHeight: 430,
    flexWrap: 'wrap'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  text: {
    minHeight: 40
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: 'red[500]'
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

const PropertyCard = props => {
  console.log('Props.....', props)
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [editing, setEditing] = React.useState(false);
  const [propertyToEdit, setPropertyToEdit] = useState({
    id: props.id,
    property_name: props.propertyName,
    description: props.description,
    address: props.address,
    city: props.city,
    state: props.state,
    image: props.image,
    price: props.price
  });

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleChanges = e => {
    setPropertyToEdit({ ...propertyToEdit, [e.target.name]: e.target.value });
  };

  const editProperty = id => {
    setEditing(true);
    setPropertyToEdit(id);
  };

  const saveProperty = e => {
    e.preventDefault();
    const userID = localStorage.getItem('id');
    console.log('Props Property...', { ...propertyToEdit, owner_id: userID });
    props.editProperty({ ...propertyToEdit, owner_id: userID });
    setPropertyToEdit('');
    setOpen(false);
  };

  const deleteProperty = id => {
    props.deleteProperty(id).then(res => {
      const userID = localStorage.getItem('id');
      props.getPropertiesByUserID(userID);
    });
  };

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <div>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpen}>Edit Post</MenuItem>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleCloseModal}
              >
                <div style={modalStyle} className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <Logo />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Edit Property
                  </Typography>
                  {/* {editing && ( */}
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
                            value={propertyToEdit.property_name}
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
                            value={propertyToEdit.description}
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
                            value={propertyToEdit.address}
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
                            value={propertyToEdit.city}
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
                            value={propertyToEdit.state}
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
                            value={propertyToEdit.price}
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
                                value={propertyToEdit.image}
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
                        onClick={saveProperty}
                      >
                        Edit Property
                      </Button>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => setEditing(false)}
                      >
                        Cancel
                      </Button>
                    </form>
                  {/* )} */}
                </div>
              </Modal>
              <MenuItem onClick={() => deleteProperty(props.id)}>
                Delete Post
              </MenuItem>
            </Menu>
          </div>
        }
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1547171761-eef8764f961e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80"
        title="land"
      />
      <CardContent>
        <Typography
          variant="body2"
          align="left"
          color="textSecondary"
          component="p"
        >
          {props.city}, {props.state}
        </Typography>
        <Typography variant="h5" align="left" component="h3">
          {props.propertyName}
        </Typography>
        <Typography variant='body2' align="left" component="p">
          {props.description}
        </Typography>
        <Typography
          variant="body2"
          align="left"
          color="textSecondary"
          component="p"
        >
          ${props.price}/night
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Star />
          {props.rating}
        </Typography>
      </CardContent>
    </Card>
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
    editProperty,
    deleteProperty,
    getPropertiesByUserID
  }
)(PropertyCard);
