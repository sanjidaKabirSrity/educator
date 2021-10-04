import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Home.css';
import HeaderImg from '../../image/Platonic love-amico.png'

const Home = () => {
    return (
<div>
    {/* Home Header Section Start  */}
    <div className="home-header">
    <Container fixed>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={6} sx={{ display: 'flex', alignItems:'center' }}>
                <div className="header-text">
                    <h1 className="header-h1">WELCOME TO <span>EDUCATOR</span></h1>
                    <p className="header-p">Study a recognised qualification with the online learning experts. Complete your qualification through our online campus. Learners have the option to claim accredited certificates.</p>
                    <Button variant="contained" className="btn">Get Started</Button>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="header-img">
                    <img src={HeaderImg} alt="img" />
                </div>
            </Grid>
        </Grid>
    </Box>
    </Container>
    </div>
    {/* Home Header Section End */}

    {/* Home Servises Section Start */}
    <div>
        <Container fixed>
            <div className="home-services-title">
                <h4 className="home-services-h4">TOP COURSES</h4>
                <h2 className="home-services-h2">Popular Services</h2>
            </div>
        </Container>
    </div>
    {/* Home Servises Section End */}

</div>
    );
};

export default Home;