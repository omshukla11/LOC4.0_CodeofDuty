import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../url'
import { Grid, Card ,CardMedia , CardContent ,Typography ,CardActions , Button} from '@mui/material'
import './accounts.css';
import './card.scss';
import VideoPlayer from 'react-player'
import ReactPlayer from 'react-player';

    const Events = () => {
    const num = [1, 2, 3, 4, 5, 6, 7];
    const [excr,setexcr] = useState([]);
    const [all , setall] = useState([]);
    const [card,setcard] = useState([]);
    const [set,setSets] = useState([]);
    const [prime,setprime] = useState([]);
    const [prime1,setprime1] = useState([]);
    const [prime2,setprime2] = useState([]);  
    const [prime3,setprime3] = useState([]);
    const [second,setsecond] = useState([]);
    const [second1,setsecond1] = useState([]);
    const [second2,setsecond2] = useState([]);
    const [second3,setsecond3] = useState([]);
    const [ytb , setytb] = useState([]);
    const [ytb1 , setytb1] = useState([]);
    const [ytb2 , setytb2] = useState([]);
    const allprog = () =>{
        
    }
    allprog();
    /*const showcards = () => {
        axios.get(url + 'planner/Workout/1/')
            .then((res) => {
                console.log(res.data);
                res.data.map((x) => {
                    setImage([...images, x.image])
                    //console.log(x.workout_day);
                    // setarr(res.data);
                    axios.get(url + `planner/WorkoutDay/${x.workout_day}/`)
                        .then((res2) => {
                            //console.log(res2.data);
                            res2.data.map((x2) => {
                                //console.log(x2.session); 
                                axios.get(url + `planner/WorkoutSession/${x2.session}/`)
                                    .then((response) => {
                                        console.log(response.data);
                                        setarr(response.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    })
                            })
                        })
                })
                console.log(arr);
            })
    }
    showcards();
    const showcards2 = () => {
        axios.get(url + 'planner/Workout/2/')
            .then((res) => {
                console.log(res.data);
                res.data.map((x) => {
                    setImage([...images, x.image])
                    //console.log(x.workout_day);
                    // setarr(res.data);
                    axios.get(url + `planner/WorkoutDay/${x.workout_day}/`)
                        .then((res2) => {
                            //console.log(res2.data);
                            res2.data.map((x2) => {
                                //console.log(x2.session); 
                                axios.get(url + `planner/WorkoutSession/${x2.session}/`)
                                    .then((response) => {
                                        // console.log(response.data);
                                        setarrcric(response.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    })
                            })
                        })
                })
                console.log(arr);
            })
    }
    showcards2();
    const showcards3 = () => {
        axios.get(url + 'planner/Workout/3/')
            .then((res) => {
                console.log(res.data);
                res.data.map((x) => {
                    setImage([...images, x.image])
                    //console.log(x.workout_day);
                    // setarr(res.data);
                    axios.get(url + `planner/WorkoutDay/${x.workout_day}/`)
                        .then((res2) => {
                            //console.log(res2.data);
                            res2.data.map((x2) => {
                                //console.log(x2.session); 
                                axios.get(url + `planner/WorkoutSession/${x2.session}/`)
                                    .then((response) => {
                                        // console.log(response.data);
                                        setarrbox(response.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    })
                            })
                        })
                })
                console.log(arr);
            })
    }
    showcards3();
*/
    const enrollcard =  (x) => {
        console.log(x);
        var axios = require('axios');
        var config = {
            method: 'post',
            url: url+'planner/planner/UserProgram/3/',
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
     };
    


    useEffect(()=>{
        axios.get(url + 'planner/all-programs/')
        .then((allcard) => {
            console.log(allcard.data);
            setall(allcard.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'planner/Workout/3/',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setcard(card.data);
        })
        .catch((e)=>{
            console.log(e);
        }) 
        axios.get(url + 'gym/Exercise/3/3/',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setexcr(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'gym/Set/3/',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setSets(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'body/Muscle/5',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setprime(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'body/Muscle/1',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setprime1(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'body/Muscle/2',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setprime2(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'body/Muscle/4',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setprime3(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'body/MuscleGroup/3',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setsecond(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        
        axios.get(url + 'body/MuscleGroup/1',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setsecond1(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'body/MuscleGroup/2',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setsecond2(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'body/MuscleGroup/4',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data);
            setsecond3(card.data);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'gym/YTurl/3/',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data.message);
            setytb(card.data.message);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'gym/YTurl/1/',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data.message);
            setytb1(card.data.message);
        })
        .catch((e)=>{
            console.log(e);
        })
        axios.get(url + 'gym/YTurl/2/',
        {headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ3Mzc4MjkwLCJpYXQiOjE2NDcxMTkwOTAsImp0aSI6IjU5NjY5ZjE4MTBjMTQ5YmViYjYwMmJlNDNjZGIyMDdmIiwidXNlcl9pZCI6M30.Yn4-mTpvG361XyPvv8HA-Ty-Ro4PA2SfOCMbtLO-ynY`,
        },})
        .then((card) => {
            console.log(card.data.message);
            setytb2(card.data.message);
        })
        .catch((e)=>{
            console.log(e);
        })
        
          

    },[])
        /*
        axios.get(url + 'planner/Workout/1/')
            .then((res) => {
                console.log(res.data);
                res.data.map((x) => {
                    setImage([...images, x.image])
                    //console.log(x.workout_day);
                    // setarr(res.data);
                    axios.get(url + `planner/WorkoutDay/${x.workout_day}/`)
                        .then((res2) => {
                            //console.log(res2.data);
                            res2.data.map((x2) => {
                                //console.log(x2.session); 
                                axios.get(url + `planner/WorkoutSession/${x2.session}/`)
                                    .then((response) => {
                                        console.log(response.data);
                                        setarr(response.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    })
                            })
                        })
                })
                console.log(arr);
            })
        axios.get(url + 'planner/Workout/2/')
            .then((res) => {
                console.log(res.data);
                res.data.map((x) => {
                    setImage([...images, x.image])
                    //console.log(x.workout_day);
                    // setarr(res.data);
                    axios.get(url + `planner/WorkoutDay/${x.workout_day}/`)
                        .then((res2) => {
                            //console.log(res2.data);
                            res2.data.map((x2) => {
                                //console.log(x2.session); 
                                axios.get(url + `planner/WorkoutSession/${x2.session}/`)
                                    .then((response) => {
                                        // console.log(response.data);
                                        setarrcric(response.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    })
                            })
                        })
                })
                console.log(arr);
            })
        axios.get(url + 'planner/Workout/3/')
            .then((res) => {
                console.log(res.data);
                res.data.map((x) => {
                    setImage([...images, x.image])
                    //console.log(x.workout_day);
                    // setarr(res.data);
                    axios.get(url + `planner/WorkoutDay/${x.workout_day}/`)
                        .then((res2) => {
                            //console.log(res2.data);
                            res2.data.map((x2) => {
                                //console.log(x2.session); 
                                axios.get(url + `planner/WorkoutSession/${x2.session}/`)
                                    .then((response) => {
                                        // console.log(response.data);
                                        setarrbox(response.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    })
                            })
                        })
                })
                console.log(arr);
            })

        axios.get(url + 'planner/Workout/4/')
            .then((res) => {
                console.log(res.data);
                res.data.map((x) => {
                    setImage([...images, x.image])
                    //console.log(x.workout_day);
                    // setarr(res.data);
                    axios.get(url + `planner/WorkoutDay/${x.workout_day}/`)
                        .then((res2) => {
                            //console.log(res2.data);
                            res2.data.map((x2) => {
                                //console.log(x2.session); 
                                axios.get(url + `planner/WorkoutSession/${x2.session}/`)
                                    .then((response) => {
                                        // console.log(response.data);
                                        setarrgym(response.data);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    })
                            })
                        })
                })
                console.log(arr);
            })*/
return (
        <div style={{transform:'translateY(-32px)'}}>
            <Card >
                <Grid container>
                        <Grid item xs={12} sx={{ fontSize: "1.6rem", fontWeight: "750", marginLeft: "3vh" }}>
                            All Programs
                        </Grid>
                        <Grid container>
                        {all.map((x, index) => {
                            return (
                            <Grid item xs={12} md={3} sm={6}>
                                        <Card sx={{ boxShadow: "none" ,textAlign:"left"}}>
                                            <div class="card">
                                                <figure class="card__thumb">
                                                    <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" class="card__image" style={{width:"50vh" , height:"50vh"}} />
                                                    <figcaption class="card__caption">
                                                        <h2 class="card__title" style={{fontSize:"1.65rem" , fontWeight:"650"}}>{x.name}</h2>
                                                        <p class="card__snippet" style={{fontSize:"1.65rem" , fontWeight:"650" ,textShadow:"2px 2px #000"}}>{x.summary}</p>
                                                        <a href="" class="card__button" onClick={()=>enrollcard(x.id)} style={{fontSize:"1.3rem" , fontWeight:"650"}}>Enroll Now</a>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </Card> 
                            </Grid>
                             )
                             })}
                        </Grid>
                    <Grid item xs={12} >
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", marginLeft: "3vh" }}>
                            Enrolled Course
                        </Grid>
                        <Grid container spacing={2} style={{padding:"2vh"}}>
                        {card.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"100%" , height:"100%"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                             2 WEEKS  - Monday
                            </Typography>
                          </CardContent>   
                        </Card>
                        </Grid>
                        )})}
                        </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", marginLeft: "3vh" }}>
                            Excercises
                        </Grid>
                        <Grid container spacing={2} style={{padding:"2vh"}}>
                        {excr.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"100%" , height:"100%"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                             {x.description} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                             {x.workout_session} Workout Sessions
                            </Typography>
                          </CardContent>  
                          {set.map((x, index) => {
                            return (
                            <div>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Button variant="outlined">Start Soon</Button>
                            <Typography variant="h6" color="text.secondary">
                            </Typography>
                            </div>
                        )})}
                        </Card>
                        </Grid>
                        )})}
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", marginLeft: "3vh" }}>
                            Work Outs
                        </Grid>
                        
                        <Grid container spacing={2} style={{padding:"2vh"}}>
                        {ytb.map((x, index) => {
                            return (
                            <Grid item spacing={12} md={3} sm={4}>
                                <Card sx={{ padding: "2px" , boxShadow:"none"}}>
                                    <div class="card-normal">
                                        <div class="card-header">
                                            <ReactPlayer className='my-3 p-3 rounded text-center'
                                                width='100%' height='350px'
                                                style={{ justifyContent: "center" }}
                                                controls
                                                url={`https://www.youtube.com/watch?v=`+x.id}
                                                onReady={() => console.log('onReady , callback')} />
                                        </div>
                                            <h4>{x.title}</h4>
                                    </div>
                                </Card>
                            </Grid>
                            
                          )})}
                          {ytb1.map((x, index) => {
                            return (
                            <Grid item spacing={12} md={3} sm={4}>
                                <Card sx={{ padding: "2px" , boxShadow:"none"}}>
                                    <div class="card-normal">
                                        <div class="card-header">
                                            <ReactPlayer className='my-3 p-3 rounded text-center'
                                                width='100%' height='350px'
                                                style={{ justifyContent: "center" }}
                                                controls
                                                url={`https://www.youtube.com/watch?v=`+x.id}
                                                onReady={() => console.log('onReady , callback')} />
                                        </div>
                                            <h4>{x.title}</h4>
                                    </div>
                                </Card>
                            </Grid>
                            
                          )})}
                          {ytb2.map((x, index) => {
                            return (
                            <Grid item spacing={12} md={3} sm={4}>
                                <Card sx={{ padding: "2px" , boxShadow:"none"}}>
                                    <div class="card-normal">
                                        <div class="card-header">
                                            <ReactPlayer className='my-3 p-3 rounded text-center'
                                                width='100%' height='350px'
                                                style={{ justifyContent: "center" }}
                                                controls
                                                url={`https://www.youtube.com/watch?v=`+x.id}
                                                onReady={() => console.log('onReady , callback')} />
                                        </div>
                                            <h4>{x.title}</h4>
                                    </div>
                                </Card>
                            </Grid>
                            
                          )})}
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", marginLeft: "3vh" }}>
                            Muscle
                        </Grid>
                        <Grid container spacing={2} style={{padding:"2vh"}}>
                        {prime.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none",textAlign:"left" , height:"98vh"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"50vh" , height:"50vh"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary" >
                             {x.description}
                            </Typography>
                            <Button variant="outlined">Learn More</Button>
                          </CardContent>
                          
                        </Card>
                        </Grid>
                        )})}
                        {prime1.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none",textAlign:"left", height:"98vh"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"50vh" , height:"50vh"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary" >
                             {x.description}
                            </Typography>
                            <Button variant="outlined">Learn More</Button>
                          </CardContent>
                          
                        </Card>
                        </Grid>
                        )})}
                        {prime2.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none",textAlign:"left", height:"98vh"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"50vh" , height:"50vh"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary" >
                             {x.description}
                            </Typography>
                            <Button variant="outlined">Learn More</Button>
                          </CardContent>
                          
                        </Card>
                        </Grid>
                        )})}
                        {prime3.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none",textAlign:"left", height:"98vh"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"50vh" , height:"50vh"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary" >
                             {x.description}
                            </Typography>
                            <Button variant="outlined">Learn More</Button>
                          </CardContent>
                          
                        </Card>
                        </Grid>
                        )})}
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", marginLeft: "3vh" }}>
                            Muscle Group
                        </Grid>
                        <Grid container spacing={2} style={{padding:"2vh"}}>
                        {second.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none", height:"107vh"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"50vh" , height:"50vh"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                             {x.description}
                            </Typography>
                            <Button variant="outlined">Learn More</Button>
                          </CardContent>
                          
                        </Card>
                        </Grid>
                        )})}
                        {second1.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none", height:"107vh"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"50vh" , height:"50vh"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                             {x.benefits}
                            </Typography>
                            <Button variant="outlined">Learn More</Button>
                          </CardContent>
                        </Card>
                        </Grid>
                        )})}
                        {second2.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none", height:"107vh"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"50vh" , height:"50vh"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                             {x.description}
                            </Typography>
                            <Button variant="outlined">Learn More</Button>
                          </CardContent>
                        </Card>
                        </Grid>
                        )})}
                        {second3.map((x, index) => {
                            return (
                        <Grid item xs={12} md={3} sm={4}>
                        <Card sx={{boxShadow:"none", height:"107vh"}}>
                        <img src={`https://0b74-2402-3a80-1397-51a3-dd83-3db1-f045-9f9d.ngrok.io`+x.image} alt="Picture by Kyle Cottrell" style={{width:"50vh" , height:"50vh"}} />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {x.name} 
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                             {x.description}
                            </Typography>
                            <Button variant="outlined">Learn More</Button>
                          </CardContent>
                          
                        </Card>
                        </Grid>
                        )})}

                        </Grid>
                            {/*<Grid item xs={12} md={3} sm={6}>
                                <Card sx={{ padding: "2px" }}>
                                    <div class="card-normal">
                                        <div class="card-header">
                                            <ReactPlayer className='my-3 p-3 rounded text-center'
                                                width='100%' height='350px'
                                                style={{ justifyContent: "center" }}
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
                     </Grid>*/}
                     {/*<Grid item xs={12}>
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", marginLeft: "3vh" }}>
                            Cricket
                        </Grid>
                        <Grid item xs={12} md={3} sm={6}>
                                {arrcric.map((x, index) => {
                                    return (
                                        <Card sx={{ boxShadow: "none" }}>
                                            <div class="card">
                                                <figure class="card__thumb">
                                                    <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="card__image" />
                                                    <figcaption class="card__caption">
                                                        <h2 class="card__title">{x.name}</h2>
                                                        <p class="card__snippet">{x.summary} Recommendation :{x.recommendations} "${x.motivation_quotes}"</p>
                                                        <a href="" class="card__button">Read more</a>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </Grid>
                     </Grid>
                     <Grid item xs={12}>
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", marginLeft: "3vh" }}>
                            Gym
                        </Grid>
                        <Grid item xs={12} md={3} sm={6}>
                                {arrgym.map((x, index) => {
                                    return (
                                        <Card sx={{ boxShadow: "none" }}>
                                            <div class="card">
                                                <figure class="card__thumb">
                                                    <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="card__image" />
                                                    <figcaption class="card__caption">
                                                        <h2 class="card__title">{x.name}</h2>
                                                        <p class="card__snippet">{x.summary} Recommendation :{x.recommendations} "${x.motivation_quotes}"</p>
                                                        <a href="" class="card__button">Read more</a>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </Grid>
                     </Grid>
                     <Grid item xs={12}>
                        <Grid item xs={12} sx={{ textAlign: "left", fontSize: "1.6rem", fontWeight: "750", marginLeft: "3vh" }}>
                            Boxing
                        </Grid>
                        <Grid item xs={12} md={3} sm={6}>
                                {arrbox.map((x, index) => {
                                    return (
                                        <Card sx={{ boxShadow: "none" }}>
                                            <div class="card">
                                                <figure class="card__thumb">
                                                    <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="card__image" />
                                                    <figcaption class="card__caption">
                                                        <h2 class="card__title">{x.name}</h2>
                                                        <p class="card__snippet">{x.summary} Recommendation :{x.recommendations} "${x.motivation_quotes}"</p>
                                                        <a href="" class="card__button">Read more</a>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </Grid>
                            </Grid>
                            </Grid>*/}
                    </Grid>
                
                </Grid>
            </Card>
        </div>
    )
}

export default Events