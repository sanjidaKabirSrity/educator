import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './Service.css';

const Service = (props) => {
    const {img , name , nickName , fee} = props.service;
    return (
        <Card sx={{ maxWidth: 345}} className="card2">
        <CardMedia
          component="img"
          height="auto"
          image={img}
          alt="Paella dish"
        />
        <CardContent className="services-text">
          <div  className="services-texts">
          <Typography className="services-title">{nickName}</Typography>
          <Typography className="services-name"><h3>{name}</h3></Typography>
          <Typography><p>Price ${fee}</p></Typography>
          </div>
          <Button variant="contained" className="btn">Buy Now</Button>
        </CardContent>
      </Card>
    );
};

export default Service;