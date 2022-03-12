import React from "react";
import { Grid } from "@mui/material";
import CountUp from 'react-countup';
const Publicity = () => {
  return (
    <div style={{ padding: "5% 10%" }}>
      <Grid container spacing={2} style={{ padding: 0 }} data-aos="fade-right">
        <Grid item xs={4}>
          <p className="fullPub">
            <span className="pubNumber">
            <CountUp end={200} duration={4}/>k+</span>
            <span className="pubData">&nbsp;Users</span>
            <br />
            <span className="pubdummy" >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </span>
          </p>
        </Grid>
        <Grid item xs={4}>
          <p className="fullPub">
            <span className="pubNumber">
            <CountUp end={150} duration={4}/>+</span>
            <span className="pubData">&nbsp;Courses</span>
            <br />
            <span className="pubdummy">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </span>
          </p>
        </Grid>
        <Grid item xs={4}>
          <p className="fullPub">
            <span className="pubNumber"> 
            <CountUp end={50} duration={4}/>+</span>
            <span className="pubData">&nbsp;Mentors</span>
            <br />
            <span className="pubdummy">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Publicity;
