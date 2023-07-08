import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/App.css';


import BackgroundImage from '../assets/bg.png';

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Indian Football Foundation</h1>
            <p className="main-para text-center">"A coach is someone who sees beyond your limits and pushes you to achieve things you never thought possible." - Michael Jordan</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}