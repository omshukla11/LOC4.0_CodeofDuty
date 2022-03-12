import React, { useState } from 'react';
// import { Jumbotron, Row, Col } from 'react-bootstrap';
import CardRowComponent from '../CardRowComponent/CardRowComponent.js';
import UserCard from '../UserCard/UserCard.js';
import ChartComponent from '../ChartComponent/ChartComponent.js';
import { Container } from '@mui/material';
// import '../../Utility/DataRequestManager'
import { Grid } from '@mui/material';
const { getRequestHeaders, getWeeklyData } = require('../Utility/DataRequestManager');

const Dashboard2 = (props) => {
  // fetch weekly data
  const accessToken = props.user.accessToken;
  const [weekData, setWeekData] = useState([]);
  // let weekData = [];

  let selected = [0, 1, 2, 3, 4, 5, 6];
  const callBack = (state) => {
    setWeekData(state);
  }
  const requestHeaders = getRequestHeaders(accessToken);
  const timeRightNow = new Date().getTime();
  getWeeklyData(timeRightNow, requestHeaders, callBack, weekData);

  return (
    <div>
      <Container className="p-3">
        <Grid container spacing={1} style={{ backgroundColor: "#272727", color: '#ffffff' }}>
          <h1 className="header">Welcome To Fit Me Up Visualizer</h1>
          {props.user.haslogin ?
            null : <div>
              <h3> Please login</h3>
            </div>
          }
        </Grid>
        {props.user.haslogin ?
          <div>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <UserCard user={props.user} />
              </Grid>
                <div>
                  <br></br>
                </div>
              <Grid item xs={6}>
                <CardRowComponent user={props.user} selected={selected} data={weekData} />
              </Grid>
                <div>
                  <br></br>
                </div>
              <Grid item xs={6}>
                <CardRowComponent user={props.user} selected={selected} data={weekData} />
              </Grid>
            </Grid>
          </div> : null
        }
      </Container>
    </div>
  );
}

export default Dashboard2;
