import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { url } from '../url.js'

export default function Verification() {

    console.log(url);

    const old_token = useParams().token
    console.log(old_token)
    const hist = useHistory()

    async function verify() {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: url+'accounts/email-verify/?token='+old_token,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                hist.push('/home');
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <center style={{ margin: '100px' }}>
            <h2>To verify your Email click on below button</h2>
            <Button variant="contained" onClick={verify} component={Link} >Verify</Button>
        </center>
    );
};