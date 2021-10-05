import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './TeacherCard.css';

const TeacherCard = (props) => {
    const {name , teacherName , teacherImg} = props.service;
    return (
        <Card sx={{ maxWidth: 345}} className="card2">
        <CardMedia
          component="img"
          height="auto"
          image={teacherImg}
          alt="Paella dish"
        />
        <CardContent className="services-text">
          <div  className="services-texts">
          <Typography className="services-title" style={{color:"#f2184f"}}>{name}</Typography>
          <Typography className="services-name"><h2>{teacherName}</h2></Typography>
          </div>
        </CardContent>
      </Card>
    );
};

export default TeacherCard;