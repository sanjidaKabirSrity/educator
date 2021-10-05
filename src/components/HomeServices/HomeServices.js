import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from "react-router-dom";
import './HomeServices.css';

const HomeServices = (props) => {
    const {img , name , nickName , fee} = props.service;
    
    // Button Handleing
    const history = useHistory();
    function handleArrowBtnClick() {
        history.push("/services");
    }

    return (
        <Card sx={{ maxWidth: 370}} className="card">
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
          </div>
          <Typography className="services-fee">
              <span className="price">${fee}  <button className="arrow-btn" onClick={handleArrowBtnClick}><i className="fas fa-arrow-right"></i></button>
              </span>
          </Typography>
        </CardContent>
      </Card>
    );
};

export default HomeServices;