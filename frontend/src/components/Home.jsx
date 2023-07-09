import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/App.css';


import BackgroundImage from '../assets/bg.png';

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Indian Football Foundation</h1>
            <p className="main-para text-center">"Welcome to the the all in one platform for online coach training</p>
            <p className="main-para text-center">"A coach is someone who sees beyond your limits and pushes you to achieve things you never thought possible." - Michael Jordan</p>
            <div className="buttons text-center">
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "50vh",
    background: `rgb(111,23,50) linear-gradient(90deg, rgba(111,23,50,1) 0%, rgba(121,9,77,1) 35%, rgba(37,22,22,1) 100%)`, 
    
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  