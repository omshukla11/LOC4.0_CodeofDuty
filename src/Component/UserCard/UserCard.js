import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
const UserCard = (props) => {
  const style = {
    backgroundColor: '#272727',
    color: '#ffffff',
      border:"3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)' , 
      borderImageSlice:"1" , fontSize:"1rem" , fontWeight:"550",boxShadow:"none",padding:"2px",
      '&:hover' :{ backgroundColor:"#f2cf07",
      backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)" , fontSize:"1rem" , fontWeight:"550" 
      }
  };
  return (
    <Card variant="outlined" style={style}>
      <CardContent>
        <Typography variant="h5" component="div">
          Welcome {props.user.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Your Google Fit Stats are aggregated below!
      </Typography>
      </CardContent>
    </Card>
  );
}
export default UserCard;
