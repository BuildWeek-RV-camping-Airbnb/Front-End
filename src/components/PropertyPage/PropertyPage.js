import React, { useEffect} from 'react';

// Redux
import { connect } from 'react-redux'

// Material UI
import {
    Container,
    Card,
    CardActions,
    CardContent,
    Button,
    Grid,
    Typography,
    makeStyles, 
    Divider,
    Paper
 } from '@material-ui/core';

// Actions
import {
  getUser,
  getPropertiesByID,
} from '../../actions'

import Star from '../../assets/icons/Star'
import NavBar from '../NavBar'
import Footer from '../Footer'
import DatePicker from './DatePicker'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '75px auto',
    padding: theme.spacing(4)
  },
  heroImage: {
    maxHeight: '50vh',
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden'
  },
  card: {
    minWidth: 275,
    maxWidth: 275,
  },
  description: {
    marginTop: 12,
    marginBottom: 16,
  },
  amenities: {
    marginTop: 12,
    marginBottom: 16,
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
  }
}));

const PropertyPage = props => {
    const classes = useStyles();

    useEffect(() => {
        const propertyID = props.match.params.id;
        props.getPropertiesByID(propertyID)
        console.log(propertyID)
    }, [])

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <NavBar />
        <main>
        <Paper className={classes.heroImage}>
        
          <img
            // style={{ display: 'none' }}
            src='https://source.unsplash.com/user/erondu'
            alt="background"
          />
        
        </Paper>
        <Grid container spacing={4}>
          {/* // Reservation Card */}
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                  <Typography variant="h3" component="h3">
                  ${props.properties.price}/night
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                  <Star />{props.properties.rating}
                  </Typography>
                  <Typography variant="body2" component="p">
                  </Typography>
              </CardContent>
                  <Divider />
              <CardActions>
                  <DatePicker /> 
              </CardActions>
              </Card>
          </Grid>
          {/* // End Reservation Card */}
          <Grid className={classes.property} item md={6}>
            <Typography>
              <h1>{props.properties.property_name}</h1>
            </Typography>
            <Typography variant='h6' color="textSecondary">
              {props.properties.city}, {props.properties.state}
            </Typography>
            <Grid className={classes.description} item sm={6}>
              <Typography variant='h5'>
                {props.properties.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid> 
        </main>
      </Container>
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