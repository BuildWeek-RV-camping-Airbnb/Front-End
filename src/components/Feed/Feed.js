import React from 'react';

// Material UI 
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// Components 


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        RVnB
      </Link>{' '}
        2019
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Feed() {
  const classes = useStyles();

  return (
    <div className="Feed">

      {/* <Topbar / NavBar /> */}


      <main>

      {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
          </Container>
        </div>
      {/* End hero unit */}

      {/* Cards unit */}
        <Container className={classes.cardGrid} maxWidth="md">
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h5" align="left" component="h2">
          Top-Rated Locations
        </Typography>
        <Typography variant="body2" align="left" color="textSecondary" component="p">
          Explore some of the best-reveiwed stays in the world
        </Typography>
      <Grid container spacing={4}>      
        {topRated.map(item => {
          return (
            <Grid item className={classes.gridItem} s>
              <LocationCard 
                key={item.id} 
                propertyName={item.property_name}
                address={item.address}
                city={item.city}
                state={item.state}
                price={item.price}
                rating={item.rating}
                ownerId={item.owner_id}
                />
            </Grid>
          );
        })}
      </Grid>
    </Container>

    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h5" align="left" component="h2">
        20+ places to stay
      </Typography>
      <Grid container spacing={4}>      
        {props.properties.map(item => {
          return (
            <Grid item className={classes.gridItem} s>
              <LocationCard 
                key={item.id} 
                propertyName={item.property_name}
                address={item.address}
                city={item.city}
                state={item.state}
                price={item.price}
                rating={item.rating}
                ownerId={item.owner_id}
                />
            </Grid>
          );
        })}
      </Grid>
    </Container>        </Container>
      {/* End Cards unit */}

      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}

    </div>
  );
}