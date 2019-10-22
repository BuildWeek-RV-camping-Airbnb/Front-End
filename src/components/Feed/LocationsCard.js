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
import FavoriteIcon from '@material-ui/icons/Favorite';


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

const LocationsCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </CardHeader>
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1547171761-eef8764f961e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80"
        title="Paella dish"
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          Campsite        
        </Typography>
        <CardContent>
          <Typography variant="h5" component="h2">
            Mountain View
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $27 per night
          </Typography>
        </CardContent>

      </CardContent>
    </Card>
  );
}

export default LocationsCard;
