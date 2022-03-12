import React from 'react'
import {Grid , Card , TextField , Button} from '@mui/material'
import {useFormik} from 'formik';
import * as yup from 'yup';
import video from '../Images/video.png';
import axios from 'axios'
import {Link} from 'react-router-dom'
const validationSchema = yup.object({
  room: yup
    .string('Enter your Room Name')
    .required('Room Name is required'),
  name: yup
    .string('Enter your Name')
    .required('Name is required'),


});

const VideoChat = () => {

  const formik = useFormik({
    initialValues: {
      name:'',
      room:'',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      var config = {
        method: "get",
        url: `http://fc30-113-193-51-31.ngrok.io/video/get_token/?channel=${values.room}`,
        headers:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json'}
    };
    axios(config)
    .then(function (response) {
    console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
    },
  });

  return (
    <div>
        <Card sx={{boxShadow:"none"}}>
        <Grid container>
            <Grid item xs={1} md={3} sm={3}></Grid>
            <Grid item xs={10} md={6} sm={6} style={{marginTop:"2vh" , marginBottom:"2vh"}}>
            <form onSubmit={formik.handleSubmit} autoComplete="off" style={{width:"100%"}}> 
              <Grid container spacing={3}>
                <Grid item xs={12} sx={{fontSize:"1.6rem" , fontWeight:"750"}}>
                  Welcome to Video Chat
                </Grid>
                <Grid item xs={12}>
                  <img src={video}/>
                </Grid>
                <Grid item xs={12} sx={{textAlign:"left" , fontSize:"1.2rem"}}>
                 Your Name
                </Grid>
                <Grid item xs={12}>
                <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                />
                </Grid>
                <Grid item xs={12} sx={{textAlign:"left" , fontSize:"1.2rem"}}>
                 Your Room Name
                </Grid>
                <Grid item xs={12}>
                <TextField
                fullWidth
                id="room"
                name="room"
                label="Room Name"
                value={formik.values.room}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.room)}
                helperText={formik.touched.name && formik.errors.room}
                />
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" fullWidth type="submit"
                sx={{backgroundColor: '#fc5296',
                backgroundImage: 'linear-gradient(315deg, #fc5296 0%, #f67062 74%)',fontSize:"1.2rem" , fontWeight:"600"}}>
                <Link to="/video">Submit</Link>
                </Button>
                </Grid>
              </Grid>
            </form>
            </Grid>
            <Grid item xs={1} md={3} sm={3}></Grid>
        </Grid>
        </Card>
    </div>
  )
}

export default VideoChat