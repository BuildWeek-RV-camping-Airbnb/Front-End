import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Star from '../../assets/icons/Star';

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
  }
}));

const LocationCard = props => {
  const classes = useStyles();

  return (

    <Card className={classes.card}>
      <Link to={`property/${props.id}`}>
      <CardHeader
      />
      <CardMedia
        className={classes.media}
        image={props.image}
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
      </CardActions>
      </Link>
    </Card>
  );
};

export default LocationCard;
