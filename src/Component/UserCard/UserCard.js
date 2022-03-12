import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
const UserCard = (props) => {
  const style = {
    backgroundColor: '#272727',
    color: '#ffffff'
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
