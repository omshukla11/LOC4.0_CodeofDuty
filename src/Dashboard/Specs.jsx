import React from 'react'
import { Grid } from '@mui/material'
import image1 from '../Images/spot-41.png'
import image2 from '../Images/spot-67.png'
import image3 from '../Images/spot-134.png'

const Specs = () => {
    return (
        <Grid container spacing={2} style={{ padding: "2% 10%" }}>
            <Grid item sm={4} data-aos="zoom-in">
                <div
                    style={{
                        borderTopRightRadius: "30px",
                        borderBottomLeftRadius: "30px",
                        backgroundColor: '#55d284',

                        // backgroundImage: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
                    }}
                >
                    <img className="heroImage" src={image1} alt="human"></img>
                </div>
            </Grid>
            <Grid item sm={4} data-aos="zoom-in">
                <div
                    style={{
                        borderTopRightRadius: "30px",
                        borderBottomLeftRadius: "30px",
                        backgroundColor: '#55d284',

                    }}
                >
                    <img className="heroImage" src={image2} alt="human"></img>
                </div>
            </Grid>
            <Grid item sm={4} data-aos="zoom-in">
                <div
                    style={{
                        borderTopRightRadius: "30px",
                        borderBottomLeftRadius: "30px",
                        backgroundColor: '#55d284',

                    }}
                >
                    <img className="heroImage" src={image3} alt="human"></img>
                </div>
            </Grid>
        </Grid >
    )
}

export default Specs