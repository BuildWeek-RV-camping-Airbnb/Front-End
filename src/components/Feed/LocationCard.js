import React from 'react';

// Material UI 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Heart from 'src/assets/icons/Heart.svg';
import Star from 'src/assets/icons/Star.svg';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  header: {
    zIndex: 9,
    backgroundColor: 'none'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {

  }
}));

const LocationCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Heart />
          </IconButton>
        </CardActions>
      </CardHeader>
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1547171761-eef8764f961e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80"
        title={props.name}

      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.city}, {props.state}       
        </Typography>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.propertyName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            <Star />
            {props.rating}
          </Typography>
        </CardContent>

      </CardContent>
    </Card>
  );
}

export default LocationCard;
