import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../url'
import { Grid, Card } from '@mui/material'
import { Paper } from '@mui/material'
import { motion } from "framer-motion";


const Recipes = () => {
    const id = 'https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io/diet/all-recipes/'
    const [arr, setarr] = useState([]);
    useEffect(() => {
        axios.get('https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io/diet/all-recipes/')
            .then((res) => {
                console.log(res.data);
                setarr(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    })
    return (
        <Card sx={{ boxShadow: "none" }}>
            <Grid style={{ padding: "20px" }} container spacing={2}>
                <Grid item xs={12} sx={{ fontSize: "1.6rem", fontWeight: "750" }}>
                    Recipes
                </Grid>
                <Grid item xs={12}>

                </Grid>
                {arr.map((x, index) => {
                    return (
                        <Grid item sm={6} md={3}>
                            <Paper
                                // style={{ paddingBottom: "60px" }}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                component={motion.div}
                                elevation={3}
                                style={{ backgroundImage: `url(${id+ x.image})`,paddingBottom: "60px" }}
                            >
                                <Card style={{ boxShadow: "none" }}>
                                    <div class="box box-2">
                                        <div class="first">
                                            <h1>
                                                {x.recipe_name}

                                            </h1>
                                        </div>
                                        <div class="second">
                                            <p>{x.recipe_description}</p>
                                            <p><a href="#">Find out more</a></p>
                                        </div>
                                    </div>
                                </Card>
                                {/*} <center>
                                <img
                                    width="150"
                                    height="150"
                                    src={
                                        url +
                                        x.recipe_image
                                    }
                                    alt="veggies"
                                ></img>
                            </center>
                            <span> &nbsp;{x.name} </span>
                            <span
                                style={{
                                    color: "red",
                                    float: "right",
                                    textDecoration: "line-through",
                                }}
                            >
                                &#8377;{x.price}&nbsp;
                            </span>
                            <br />
                            <span style={{ color: "rgba(0,0,0,.6)", fontSize: ".8rem" }}>
                                &nbsp;Stock Left: {x.total_stock}
                            </span>
                            <span style={{ color: "green", float: "right" }}>
                                &#8377;{x.wholesale_price}&nbsp;
                            </span>
                            <br />
                            <span style={{ color: "red" }}>
                                {x.products_ordered}/{x.min_order}
                            </span>
                            *
                            {/* <Badge color="primary" badgeContent={4}>
          <ShoppingCart />{" "}
        </Badge>
        <Badge color="primary" badgeContent={4}> */}
                                {/* <span>Already in cart:{x.products_ordered}</span> */}
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </Card>
    )
}

export default Recipes