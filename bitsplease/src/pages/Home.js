import React, { Fragment } from "react";
import {
    Link
} from "react-router-dom";
import '../App.css';
import Projects from '../pages/Projects'

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="border">
                    <h1 className="neonText">Bits Please</h1>

                    <ul>
                        <li >
                            <Link style={{
                                color: "#fff"
                            }}
                                to="/projects">
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
                                to="/projects">
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
                                to="/projects">
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
                                to="/projects">
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
                                to="/projects">
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

