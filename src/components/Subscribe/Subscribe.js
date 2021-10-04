import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div style={{textAlign:"center", height:"500px", backgroundColor:"#f3acbd5e" , display:'flex', alignItems:'center' , justifyContent:"center"}}>
            <div>
            <h4 className="home-services-h4">SUBSCRIBE NEWSLETTER</h4>
            <h2 className="home-services-h2">Subscribe To Out Newsletter</h2>
            <input type="text" placeholder="Enter Your Name" className="subscribe-input" />
            <button className ="subscribe-btn">SUBMIT</button>
            </div>
        </div>
    );
};

export default Subscribe;