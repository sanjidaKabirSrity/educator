import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Services.css';
import Service from './../Service/Service';

const Services = (props) => {
    const {services} = props;
    return (
        <div className="services-main">
        <Container fixed>
            <div className="home-services-title">
                <h2 className="home-services-h2">Our Popular Services</h2>
            </div>
            <div className="Meal-Item">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Grid key={service.id} item xs={2} sm={3} md={3}>
                    <Service service={service}></Service>
                    </Grid>)
                }
                </Grid>
            </Box>
            </div>
        </Container>
    </div>
    );
};

export default Services;