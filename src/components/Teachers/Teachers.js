import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TeacherCard from '../TeacherCard/TeacherCard';
import './Teachers.css';

const Teachers = (props) => {
    const {services} = props;
    return (
        <div className="services-main" style={{ marginTop: "-15px" }}>
        <Container fixed>
            <div className="home-services-title">
                <h2 className="home-services-h2">Our Course Teachers</h2>
            </div>
            <div className="Meal-Item">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Grid key={service.id} item xs={2} sm={3} md={4}>
                    <TeacherCard service={service}></TeacherCard>
                    </Grid>)
                }
                </Grid>
            </Box>
            </div>
        </Container>
    </div>
    );
};

export default Teachers;