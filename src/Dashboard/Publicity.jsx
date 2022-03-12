import React from "react";
import { Grid } from "@mui/material";
const Publicity = () => {
  return (
    <div style={{ padding: "5% 10%" }}>
      <Grid container spacing={2} style={{ padding: 0 }}>
        <Grid item xs={4}>
          <p className="fullPub">
            <span className="pubNumber">200k+</span>
            <span className="pubData">&nbsp;Users</span>
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
            <span className="pubNumber">150+</span>
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
            <span className="pubNumber">50+</span>
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
