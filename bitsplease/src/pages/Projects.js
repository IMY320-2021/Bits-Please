import React from "react";
import './Projects.css';
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import backArrow from "../assets/arrow_back_black_24dp.svg";

function Projects() {

    return (
        <div className="App">
            <header className="App-header">

                <div className="outerWrapper">
                    <div className="wrapper">
                        <div className="project1">
                            <button className="title"></button>
                            <h1 className="titleNotGlow">Project 1</h1>
                            <button className="image"><img className='animate-left' src={car1}></img></button>
                        </div>
                        <div className="project2">
                            <button className="image"><img className='animate-right' src={car2}></img></button>
                            <h1 className="titleNotGlow">Project 2</h1>
                        </div>
                        <div className="project3">
                            <button className="image"><img className='animate-right' src={car3}></img></button>
                            <h1 className="titleNotGlow">Project 3</h1>
                        </div>
                        <div className="project4">
                            <button className="image"><img className='animate-right' src={car4}></img></button>
                            <h1 className="titleNotGlow">Project 4</h1>
                        </div>
                        <div className="project5">
                            <button className="image"><img src={car5}></img></button>
                            <h1 className="titleNotGlow">Project 5</h1>
                        </div>

                    </div>
                </div>
                <div className="arrowBox">
                    <div className="arrow"></div>
                </div>
                <img className="Home" src={backArrow}></img>
            </header>
        </div>
    );
}

export default Projects;