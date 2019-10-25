import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import FavoriteIcon  from '@material-ui/icons/Favorite'
import Star from '../../assets/icons/Star';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: '0px'
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
    flexWrap: 'wrap',
  },
  link: {
    textDecoration: 'none'
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
      <Link to={`property/${props.id}`} className={classes.link}>
      <CardHeader
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1547171761-eef8764f961e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80"
        title="land"
      />
      <CardContent>
        <Typography className={classes.cityState} variant="headline" align="left" color="textSecondary" component="subtitle1">
          {props.city}, {props.state}    
        </Typography>
          <Typography className={classes.propertyName} variant="display2" align="left" color="textPrimary" component="h2" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "pre" }}>
            {props.propertyName}
          </Typography>
          <br/>
        <Typography className={classes.price} variant="subheading" align="left" color="textSecondary" component="h3">
          ${props.price}/night
        </Typography>
        <Typography className={classes.rating} variant="subheading" align="right" color="textSecondary" component="h3">
          <Star />{' '}
          {props.rating}
        </Typography>
      </CardContent>
      </Link>
    </Card>
  );
};

export default LocationCard;
