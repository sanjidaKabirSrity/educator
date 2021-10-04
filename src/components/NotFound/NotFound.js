import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import './NotFound.css';
import error from '../../image/404 Error-amico.png'

const NotFound = () => {
    // Button Handleing
    const history = useHistory();
    function handleBackHomeClick() {
        history.push("/home");
    } 

    return (
        <div className="not-found">
            <div className = "err-img">
                <img src={error} alt="" />
            </div>
            <Button variant="contained" className="btn" onClick={handleBackHomeClick}>Go Home</Button>
        </div>
    );
};

export default NotFound;