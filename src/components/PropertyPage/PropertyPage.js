import React, { useEffect} from 'react';

// Redux
import { connect } from 'react-redux'

// Material UI
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    makeStyles 
 } from '@material-ui/core';

// Actions
import {
  getUser,
  getPropertiesByID,
} from '../../actions'

import Star from '../../assets/icons/Star'
import NavBar from '../NavBar'
import Footer from '../Footer'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: '75px auto'
  },  
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PropertyPage = props => {
    const classes = useStyles();

    useEffect(() => {
        const propertyID = props.match.params.id;
        props.getPropertiesByID(propertyID)
        console.log(propertyID)
    }, [])

  return (
    <div className={classes.root}>
        <NavBar />
        <div className={classes.content}>
        {/* // Reservation Card */}
        <Card className={classes.card}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            ${props.properties.price}/night
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            <Star />{props.properties.rating}
            </Typography>
            <Typography variant="body2" component="p">
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
        {/* // End Reservation Card */}
        </div> 
    </div> // root 
  );
}

const mapStateToProps = state => {
    return {
      properties: state.properties,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    {
      getUser,
      getPropertiesByID,
    }
  )(PropertyPage);