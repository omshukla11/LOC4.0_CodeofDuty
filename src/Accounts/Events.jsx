import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../url'
import {Grid , Card} from '@mui/material'
import './accounts.css';
import './card.scss';
import VideoPlayer from 'react-player'
import ReactPlayer from 'react-player';

const Events = () => {

  const [arr, setarr] = useState([]);
    useEffect(() => {
        axios.get(url+'planner/Workout/1/')
            .then((res) => {
                console.log(res.data);
                setarr(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    })
  return (
    <div>
        <Card>
            <Grid container>
                <Grid item xs={12}>
                <Grid item xs={12} sx={{textAlign:"left" ,fontSize:"1.6rem" , fontWeight:"750" ,marginLeft:"3vh"}}>
                 Yoga
                </Grid>
                <Grid container>
                <Grid item xs={12} md={3} sm={6}>
                <Card style={{boxShadow:"none"}}>
              <div class="box box-2">
                <div class="first">
                   
                </div>
               <div class="second">
                  <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                   <p><a href="#">Find out more</a></p>
               </div>
               </div>
        </Card>
                    <Card sx={{boxShadow:"none"}}>
                    <div class="card">{x.id}
		                <figure class="card__thumb">
			              <img src={url+x.image} alt="Picture by Kyle Cottrell" class="card__image" />
			              <figcaption class="card__caption">
				            <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
				            <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				            <a href="" class="card__button">Read more</a>
			              </figcaption>
		                </figure>
	                  </div>
                    </Card>
                    );
                })};
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                <Card sx={{ padding:"2px"}}>
                  <div class="card-normal">
                  <div class="card-header">
                  <ReactPlayer className='my-3 p-3 rounded text-center'
                        width = '100%' height='350px'
                        style={{justifyContent: "center"}}
                        controls
                        url="https://www.youtube.com/watch?v=ckiaNqOrG5U"
                        onReady={() => console.log('onReady , callback')} />
                  </div>
                  <div class="card-body">
                  <span class="tag tag-pink">Design</span>
                  <h4>
                    10 Rules of Dashboard Design
                  </h4>
                  <p>
                    Dashboard Design Guidelines
                  </p>
                  <div class="user">
                  <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
                  <div class="user-info">
                  <h5>Carrie Brewer</h5>
                  <small>1w ago</small>
                  </div>
                  </div>
                  </div>
                  </div>
                </Card>
                </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid item xs={12} sx={{textAlign:"left" ,fontSize:"1.6rem" , fontWeight:"750" ,marginLeft:"3vh"}}>
                 Yoga
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <Card sx={{boxShadow:"none"}}>
                    <div class="card">
		            <figure class="card__thumb">
			        <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="card__image" />
			        <figcaption class="card__caption">
				    <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
				    <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				    <a href="" class="card__button">Read more</a>
			        </figcaption>
		            </figure>
	                </div>
                    </Card>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid item xs={12} sx={{textAlign:"left" ,fontSize:"1.6rem" , fontWeight:"750" ,marginLeft:"3vh"}}>
                 Yoga
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <Card sx={{boxShadow:"none"}}>
                    <div class="card">
		            <figure class="card__thumb">
			        <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="card__image" />
			        <figcaption class="card__caption">
				    <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
				    <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				    <a href="" class="card__button">Read more</a>
			        </figcaption>
		            </figure>
	                </div>
                    </Card>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <Grid item xs={12} sx={{textAlign:"left" ,fontSize:"1.6rem" , fontWeight:"750" ,marginLeft:"3vh"}}>
                 Yoga
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <Card sx={{boxShadow:"none"}}>
                    <div class="card">
		            <figure class="card__thumb">
			        <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="card__image" />
			        <figcaption class="card__caption">
				    <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
				    <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
				    <a href="" class="card__button">Read more</a>
			        </figcaption>
		            </figure>
	                </div>
                    </Card>
                </Grid>
                </Grid>
            </Grid>
        </Card>
    </div>
  )
}

export default Events