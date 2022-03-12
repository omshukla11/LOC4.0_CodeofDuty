import React from "react";
import { Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiPlantFill } from "react-icons/ri";
import { MdOutlineEmojiNature } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import cricket from '../Images/cricket.png'
import boxing from '../Images/boxing.png'
import yoga from '../Images/yoga.png'
import gym from '../Images/gym.png'
import "./Basic.css";

const Sport = () => {
  return (
    <div className="DailyStap" >
      <center>
        <h2>Workout Plans</h2>
        <br />
      </center>
      <Grid container spacing={2} data-aos="fade-up">
        <Grid item md={3} sm={6} xs={6}>
          <Link to={`/events`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
              style={{padding:'5%'}}
            >
              <center>
                <img width="150" height="150" src={gym} alt="wheat"></img>
              </center>
              <p> &nbsp; Short Workout </p>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={3} sm={6} xs={6}>
          <Link to={`/events`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
              style={{padding:'5%'}}

            >
              <center>
                <img width="150" height="150" src={yoga} alt="oil"></img>
              </center>
              <p>Stretching</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={3} sm={6} xs={6}>
          <Link to={`/events`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
              style={{padding:'5%'}}
              
            >
              <center>
                <img width="150" height="150" src={boxing} alt="wheat"></img>
              </center>
              <p> Boxing</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={3} sm={6} xs={6}>
          <Link to={`/events`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
              style={{padding:'5%'}}

            >
              <center>
                <img width="150" height="150" src={cricket} alt="wheat"></img>
              </center>
              <p> Cricket Routines</p>
            </Paper>
          </Link>
        </Grid>
        {/* <Grid item md={2} sm={6} xs={6}>
          <Link to={`category/Indian Grocery`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
            >
              <center>
                <img width="150" height="150" src={spice} alt="wheat"></img>
              </center>
              <p> &nbsp; Indian Spices</p>
            </Paper>
          </Link>
        </Grid> */}
        {/* <Grid item md={2} sm={6} xs={6}>
          <Link to={`category/Daily essentials`} className="cat_link">
            <Paper
              whileHover={{ scale: 1.1 }}
              component={motion.div}
              elevation={3}
            >
              <center>
                <img width="150" height="150" src={sugar} alt="wheat"></img>
              </center>
              <p> &nbsp; Essentials</p>
            </Paper>
          </Link>
        </Grid> */}
      </Grid>


    </div>
  );
};

export default Sport;