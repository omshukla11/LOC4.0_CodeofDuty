import { Button, Divider, Paper } from '@mui/material'
import React, { useState } from 'react'
import coin from '../Images/coin.png'
var Point ;
var axios = require('axios');


const Coupons = () => {
    const [c, setC] = useState();
    var config = {
        method: 'get',
        url: 'https://4001-2409-4040-d89-2d86-f8fc-de43-c17d-e7ed.ngrok.io/gym/ExPerUser/3/',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY'
        }
    };

    axios(config)
        .then(function (response) {
            console.log(response.data["Total No of Exercises Done"]);
            setC(response.data["Total No of Exercises Done"]);
        })
        .catch(function (error) {
            console.log(error);
        });

    if (c % 5 == 0) {
        Point = c / 5;
    }
    else {
        Point = (c - (c % 5))/5;
    }

    const Points =20;
    return (
        <div ><Paper elevation={3} style={{ padding: '2%' }}>
            <h1 >Admin</h1>
            <h2 style={{ opacity: '.75' }}>Points <img src={coin} width='20'></img> : {Points}</h2>
        </Paper>
            <br />
            <Paper elevation={3} style={{ padding: '3%' }}>
                <h3 style={{ float: 'left' }}>Upcoming Program</h3>
                <h5 style={{ color: 'red' }} >1hr Duration </h5>
                <br />
                <h2 >On Upper Body</h2>
                <Divider />
                <Button variant='outlined' style={{ margin: '2%' }}>Start !</Button>
            </Paper></div>
    )
}

export default Coupons 