import React, { useEffect } from 'react';
import { connect } from 'react-redux'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Components
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import DatePicker from '../PropertyPage/DatePicker';
import { getThemeProps } from '@material-ui/styles';
import Star from '../../assets/icons/Star'

// Actions
import {
  getUser,
  getPropertiesByID,
} from '../../actions'



const useStyles = makeStyles(theme => ({
  heroContent: {
    height: '40vh'
  },
  cardGrid: {

  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  form:{
    flexDirection: 'column',
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
    <div className="PropertyPage">
      <NavBar />

    {/* Hero unit */}
        <div className={classes.hero} backgroundImage={props.image}>
        </div>
    {/* end Hero unit */}

      <Container className={classes.cardGrid} >
        
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
    {/* end Left side */}

    {/* Right side */}
            <Grid item xs={12} md={6}>
              <Typography className={classes.pos} color="textSecondary">
                Amenities
              </Typography>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemIcon>{AMENITIY ICON}</ListItemIcon>
                    <ListItemText primary={AMENITIY}/>
                  </ListItem>
                )}
              </List>
            </Grid>
    {/* end Right side */}

          </div>
        </Grid>



        <Grid item xs={6}>
          <div className={classes.form}>
            <div className={classes.formHeader}>
              <Typography className={classes.heading} variant="h5" align="left">
                <span><h2>${props.properties.price} </h2><h4>per night</h4></span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Star />
                {props.properties.price}
              </Typography>
            </div>
            <Divider />
            <DatePicker />
          </div>
        </Grid>
      
      </Container>
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
)(PropertyPage);
