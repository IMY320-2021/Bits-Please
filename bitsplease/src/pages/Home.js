import React from "react";
import {
    Link
} from "react-router-dom";
import '../App.css';
import sample from '../assets/DataVideo.mp4';

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="border">

                    {/* <video autoPlay loop muted id='video'>
                        <source src={sample} type='video/mp4' />
                    </video> */}

                    <h1 className="neonText">Bits Please</h1>

                    <ul>
                        <li >
                            <Link style={{
                                color: "#fff"
                            }}
                                to="/Projects">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Projects
                            </Link >
                        </li>
                        <li >
                            <Link style={{
                                color: "#fff"
                            }}
                                to="/Shop">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Shop
                            </Link >
                        </li>
                        <li >
                            <Link style={{
                                color: "#fff"
                            }}
                                to="/AboutUs">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                About Us
                            </Link >
                        </li>
                        <li >
                            <Link style={{
                                color: "#fff"
                            }}
                                to="/OurTeam">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Our Team
                            </Link >
                        </li>
                        <li >
                            <Link style={{
                                color: "#fff"
                            }}
                                to="/ContactUs">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Contact Us
                            </Link >
                        </li>

                    </ul>
                </div>
            </header>

        </div>
    );
}

