import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../url'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import { motion } from "framer-motion";


const Recipes = () => {

    const [arr, setarr] = useState([]);
    useEffect(() => {
        axios.get(url + '/diet/all-recipes/')
            .then((res) => {
                console.log(res.data);
                setarr(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    })
    return (
        <Grid style={{ padding: "20px" }} container spacing={2}>
            {arr.map((x, index) => {
                return (
                    <Grid item sm={6} md={3}>
                        <Paper
                            style={{ paddingBottom: "60px" }}
                            whileHover={{
                                scale: 1.05,
                            }}
                            component={motion.div}
                            elevation={3}
                        >
                            <center>
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
    )
}

export default Recipes