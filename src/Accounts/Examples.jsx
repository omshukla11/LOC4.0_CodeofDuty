import React from 'react'
import Card from '@mui/material/Card'
import './card.scss';
import { Grid } from '@mui/material';
const Examples = () => {
    return (
        <Grid container >
            <Grid xs={12}>
            <Grid container >
            <Grid item xs={12} md={3} sm={6}>
                    <Card sx={{boxShadow:"none"}}>
                    <div class="card">
		            <figure class="card__thumb">
			        <img src="https://www.fx-sport.net/wp-content/uploads/2015/08/joanna-soh-fx-sport-vrx-headphones.jpg" alt="Picture by Kyle Cottrell" class="card__image" />
			        <figcaption class="card__caption">
				    <h2 class="card__title">Joanna Soh</h2>
				    <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				    <a href="" class="card__button">Read more</a>
			        </figcaption>
		            </figure>
	                </div>
                    </Card>
                </Grid><Grid item xs={12} md={3} sm={6}>
                    <Card sx={{boxShadow:"none", color:"black"}}>
                    <div class="card">
		            <figure class="card__thumb">
			        <img src="https://chloeting.com/_next/static/media/peach-tank1.343621ce.jpg" alt="Picture by Kyle Cottrell" class="card__image" />
			        <figcaption class="card__caption">
				    <h2 class="card__title">Chloe Ting</h2>
				    <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				    <a href="" class="card__button">Read more</a>
			        </figcaption>
		            </figure>
	                </div>
                    </Card>
                </Grid><Grid item xs={12} md={3} sm={6}>
                    <Card sx={{boxShadow:"none"}}>
                    <div class="card">
		            <figure class="card__thumb">
			        <img src="https://i.scdn.co/image/ab67706c0000bebbcde21930bd0be2f717bc9b35" alt="Picture by Kyle Cottrell" class="card__image" />
			        <figcaption class="card__caption">
				    <h2 class="card__title">Fraser Wilson</h2>
				    <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				    <a href="" class="card__button">Read more</a>
			        </figcaption>
		            </figure>
	                </div>
                    </Card>
                </Grid><Grid item xs={12} md={3} sm={6}>
                    <Card sx={{boxShadow:"none"}}>
                    <div class="card">
		            <figure class="card__thumb">
			        <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="card__image" />
			        <figcaption class="card__caption">
				    <h2 class="card__title">Cricket Routines</h2>
				    <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				    <a href="" class="card__button">Read more</a>
			        </figcaption>
		            </figure>
	                </div>
                    </Card>
                </Grid>
            </Grid>
            </Grid>
        </Grid>

    )
}

export default Examples