import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const CardComponent = (props) => {
  const style = {
    backgroundColor: '#272727',
    color: '#ffffff'
  };
  return (
    <Card variant="outlined" style={style}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.element.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.element.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CardComponent;
