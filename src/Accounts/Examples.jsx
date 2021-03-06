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
			        <img src="https://www.fx-sport.net/wp-content/uploads/2015/08/joanna-soh-fx-sport-vrx-headphones.jpg" alt="Picture by Kyle Cottrell" class="card__image"/>
			        <figcaption class="card__caption">
				    <h2 class="card__title">Joanna Soh</h2>
				    <p class="card__snippet">Joanna Soh is a Wellness and Fitness YouTube personality based in Asia. With over 1.6 million subscribers and 150 million views, Joanna creates videos on the topics of fitness, nutrition, exercise and health tips.</p>
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
				    <p class="card__snippet">Chloe is a leading fitness creator on YouTube with over 22M subscribers.</p>
				    <a href="" class="card__button">Read more</a>
			        </figcaption>
		            </figure>
	                </div>
                    </Card>
                </Grid><Grid item xs={12} md={3} sm={6}>
                    <Card sx={{boxShadow:"none"}}>
                    <div class="card">
		            <figure class="card__thumb">
			        <img src="https://i.scdn.co/image/ab67706c0000bebbcde21930bd0be2f717bc9b35" alt="Picture by Kyle Cottrell" class="card__image"/>
			        <figcaption class="card__caption">
				    <h2 class="card__title">Fraser Wilson</h2>
				    <p class="card__snippet">Fraser Wilson is an Australian Fitness YouTuber. He usually makes workout videos, but sometimes he also discusses about how to stay fit and healthy in his videos.</p>
				    <a href="" class="card__button">Read more</a>
			        </figcaption>
		            </figure>
	                </div>
                    </Card>
                </Grid><Grid item xs={12} md={3} sm={6}>
                    <Card sx={{boxShadow:"none"}}>
                    <div class="card">
		            <figure class="card__thumb">
			        <img src="https://dkaradio.com/wp-content/uploads/2020/05/Screenshot_20200511-213729.png" alt="Picture by Kyle Cottrell" class="card__image" />
			        <figcaption class="card__caption">
				    <h2 class="card__title">Fitness Marshall</h2>
				    <p class="card__snippet">The channel Fitness Marshall is founded by Los Angeles-based self-proclaimed fitness pop star Caleb Marshall, 27, whose campy videos have garnered over 2.5 million subscribers.</p>
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