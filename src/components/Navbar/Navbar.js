import { Container, Grid} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png'
import './Navbar.css';

const Navbar = () => {
    // Navtabs activator
    const activeNavStyle={
        fontWeight: "bold",
        color: '#f2184f',
        borderBottom: '1px solid #f2184f'
      }

    return (
        <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
            <div className ="logo">
                <img src={logo} alt="" />
            </div>
        </Grid>
        <Grid item xs={5}>
        </Grid>
        <Grid item xs={5}>
            <nav>
                <NavLink to="/home" className="NavLink" activeStyle={activeNavStyle}>Home</NavLink>
                <NavLink to="/services" className="NavLink" activeStyle={activeNavStyle}>Services</NavLink>
                <NavLink to="/teachers" className="NavLink" activeStyle={activeNavStyle}>Teachers</NavLink>
                <NavLink to="/about" className="NavLink" activeStyle={activeNavStyle}>About Us</NavLink>
                {/* <NavLink to="/subscribe" className="NavLink" activeStyle={activeNavStyle}>Subscribe</NavLink> */}
            </nav>
        </Grid>
      </Grid>
    </Box>
    </Container>
    );
};

export default Navbar;
