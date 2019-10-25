import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  CardHeader, 
  CardMedia, 
  Typography,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Paper
} from '@material-ui/core';

// Components
import NavBar from '../NavBar';
import Footer from '../Footer';
import DatePicker from './DatePicker';
// import { getThemeProps } from '@material-ui/styles';
import Star from '../../assets/icons/Star'

// Actions
import {
  getUser,
  getPropertiesByID,
} from '../../actions'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '75px auto'
  },
  heroContent: {
    height: '40vh'
  },
  cardGrid: {},
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  card: {
    width: '50%',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

// function generate(element) {
//   return (
//     props.amenities.map(value =>
//     React.cloneElement(element, {
//       key: value,
//     }))
//   );
// }

const Copy = props => {
  const classes = useStyles();

  useEffect(() => {
    const propertyID = props.match.params.id;
    props.getPropertiesByID(propertyID)
    console.log(propertyID)
  }, [])

  return (
    
    <div className={classes.root}>
      <NavBar />

    {/* Hero unit */}
        <div className={classes.hero} backgroundImage={props.properties.image}>
        </div>
    {/* end Hero unit */}
        
    {/* Left side */}
        <Grid item xs={6}>
          <div className={classes.info}>
            <Avatar alt={props.name} src={props.avatar} className={classes.bigAvatar} />
            <Typography variant="body2" color="textSecondary" component="p">
              {props.firstName}
            </Typography>
            <Divider />
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </div>
        </Grid>
    {/* end Left side */}

    {/* Right side */}
      
            <Grid item xs={12} md={6}>
              <Typography className={classes.pos} color="textSecondary">
                Amenities
              </Typography>
              <List>
                {/* {generate( */}
                  <ListItem>
                    <ListItemIcon>{props.properties.icon}</ListItemIcon>
                    <ListItemText primary={props.properties.amenity}/>
                  </ListItem>
                {/* )} */}
              </List>
            </Grid>
        
    {/* end Right side */}

          


    <Card className={classes.card}>
      <CardContent>           
        <Grid item xs={12} sm={8} md={5} component={Paper} square className={classes.box}>
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Typography variant="h5" align="left">
                  <h2>${props.properties.price}/night</h2>
                </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Star />
                {props.properties.price}
              </Typography>
              <Divider />
              <DatePicker />
              </Grid>
            </form>
          </div>
        </Grid>
      </CardContent>
    </Card>
      
      
    <Footer />
    
    </div>
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
)(Copy);
