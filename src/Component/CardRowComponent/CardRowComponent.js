import React from 'react';
// import { CardDeck } from 'react-bootstrap';
import CardComponent from '../CardComponent/CardComponent.js';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

const CardRowComponent = (props) => {
  // calculate aggregated data
  let selected = props.selected;
  if (selected.length === 0) {
    selected = [0, 1, 2, 3, 4, 5, 6];
  }
  const style = {
    backgroundColor: '#272727',
    color: '#ffffff',
      border:"3px solid", borderImageSource: 'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)' , 
      borderImageSlice:"1" , fontSize:"1rem" , fontWeight:"550",boxShadow:"none",padding:"2px",
      '&:hover' :{ backgroundColor:"#f2cf07",
      backgroundImage: "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)" , fontSize:"1rem" , fontWeight:"550" 
      }
  };
  const data = props.data;
  // aggData = {"Heart": __, "Move": ___ ...}
  const aggData = {
    Calories: 0,
    Heart: 0,
    Move: 0,
    Steps: 0
  };
  if (data.length > 0) {
    selected.forEach((idx) => {
      aggData.Calories += data[idx].Calories;
      aggData.Heart += data[idx].Heart;
      aggData.Move += data[idx].Move;
      aggData.Steps += data[idx].Steps;
    })
  }

  return (
    <div>
      <Grid container spacing={4} style={{padding:'3% 0% '}} >
        <Grid item xs={3}>
          <CardComponent element={{ title: "Calories Burnt", value: aggData.Calories, id: 0 }} style={style}/>
        </Grid>
        <Grid item xs={3}>
          <CardComponent element={{ title: "Heart Points", value: aggData.Heart, id: 1 }} />
        </Grid>
        <Grid item xs={3}>
          <CardComponent element={{ title: "Steps Travelled", value: aggData.Steps, id: 3 }} />
        </Grid>
        <Grid item xs={3}>
          <CardComponent element={{ title: "Move Minutes", value: aggData.Move, id: 2 }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CardRowComponent;