import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux'
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
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import PropertyToolbar from '../PropertyToolbar';

import { editProperty, deleteProperty, getPropertiesByUserID } from '../../../../../../actions'

import Star from '../../../../../../assets/icons/Star';
import Heart from '../../../../../../assets/icons/Heart';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0px'
  },
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
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
  }
}));

const PropertyCard = props => {
  console.log('CardProps...', props)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteProperty = id => {
    props.deleteProperty(id).then(res => {
      const userID = localStorage.getItem('id');
      props.getPropertiesByUserID(userID);
    });
  }

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
          <MenuItem onClick={handleClose}>Edit Post</MenuItem>
          <MenuItem onClick={() => deleteProperty(props.id)}>Delete Post</MenuItem>
        </Menu>
        </div>
        }
        // title={props.propertyName}
        // subheader={props.users}
      />
      <CardMedia
        className={classes.media}
        image="https://unsplash.com/photos/gh7gMw7A-IA"
        title="land"
      />
      <CardContent>
        <Typography variant="body2" align="left" color="textSecondary" component="p">
          {props.city}, {props.state}       
        </Typography>
          <Typography variant="h5" align="left" component="h3">
            {props.propertyName}
          </Typography>
        <Typography variant="body2" align="left" color="textSecondary" component="p">
          ${props.price}/night
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Star />
          {props.rating}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
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
