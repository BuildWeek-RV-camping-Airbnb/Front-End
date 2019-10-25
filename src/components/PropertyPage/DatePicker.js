import 'date-fns';
import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#F26E22'
  },
}))

export default function DatePicker() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <Grid item xs={12}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="checkin"
            label="Check In"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change check-in date',
            }}
          />
        </Grid>
        <Grid item xs={12}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="checkout"
          label="Check Out"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change check-out date',
          }}
        />
        </Grid>
        <Button
          type='submit'
          item m={12} 
          variant="contained"
          className={classes.submit} 
          >
        Reserve
      </Button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
