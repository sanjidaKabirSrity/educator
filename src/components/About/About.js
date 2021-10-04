import { Container, Grid} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const About = () => {
    return (
        <Container fixed>
        <Box sx={{ flexGrow: 1 , py:3, height:500}}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
            <div className ="About-box">
                <h2 className="home-services-h2" style={{padding:"20px 0px"}}>WHO WE ARE</h2>
                <p className="header-p" style={{lineHeight:"34px"}}>Educational Corporation is a corporation formed not for profit but for an educational purpose, ,particularly the establishment and maintenance of a school, college, or university. ... When founded by private individuals or supported by private funds or privately endowed it is a private corporation.Corporate Education refers to a system of professional development activities provided to educate employees. It may consist of formal university or college.</p>
            </div>
        </Grid>
        <Grid item xs={6}>
        <div className ="About-box">
            <h2 className="home-services-h2" style={{padding:"20px 0px"}}>WHAT WE DO</h2>
            <p className="header-p" style={{lineHeight:"34px"}}>Corporate Education refers to a system of professional development activities provided to educate employees. It may consist of formal university or college. When founded by private individuals or supported by private funds or privately endowed it is a private corporation.Corporate Education refers to a system of professional development When you think of educational technology, do you picture a classroom full of ... What it does: Panorama Education, a data analytics company, focuses</p>
        </div>
        </Grid>
      </Grid>
    </Box>
    </Container>
    );
};

export default About;