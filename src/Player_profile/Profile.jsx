import React from 'react'
import Chart from './Chart'
import Pie from './Pie'
import { useEffect } from "react";

import Todo from './Todo'
import { TabContext, TabPanel } from '@mui/lab'
import NumberOfEx from './NumberOfEx';
import { Grid } from '@mui/material';
import Line from './Line';
import Coupons from './Coupons';
const Profile = () => {
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  return (

    <div style={{ padding: '4%' , transform: 'translateY(-32px)' }}>
      <h1>Your Profile</h1>
      <Grid container>
        <Grid item xs={8}>
          <Todo />
        </Grid>
        <Grid item xs >
        <Coupons/>
        </Grid>
        <Grid item xs={8}>
          <Line />
        </Grid>
        <Grid item xs>
          <NumberOfEx />

        </Grid>
        <Grid item xs={12}>
          <Chart />

        </Grid>
      </Grid>
    </div>

  )
}

export default Profile