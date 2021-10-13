import React from "react";
import './Projects.css';

function Projects() {

    return (
        <div className="App">
            <header className="App-header">

                <div className="outerWrapper">
                    <div className="wrapper">
                        <div className="project1">
                            <button className="title"></button>
                            <h1 className="titleNotGlow">Project 1</h1>
                            <button className="image"><img className='animate-left' src={"./car1.jpg"} alt="Project1"></img></button>
                        </div>
                        <div className="project2">
                            <button className="image"><img className='animate-right' src={"./car2.jpeg"} alt="Project2"></img></button>
                            <h1 className="titleNotGlow">Project 2</h1>
                        </div>
                        <div className="project3">
                            <button className="image"><img className='animate-right' src={"./car3.jpg"} alt="Project3"></img></button>
                            <h1 className="titleNotGlow">Project 3</h1>
                        </div>
                        <div className="project4">
                            <button className="image"><img className='animate-right' src={"./car4.jpg"} alt="Project4"></img></button>
                            <h1 className="titleNotGlow">Project 4</h1>
                        </div>
                        <div className="project5">
                            <button className="image"><img src={"./car5.jpg"} alt="Project5"></img></button>
                            <h1 className="titleNotGlow">Project 5</h1>
                        </div>

                    </div>
                </div>
                <div className="arrowBox">
                    <div className="arrow"></div>
                </div>
                <img className="Home" src={"./arrow_back_black_24dp.svg"} alt="Home"></img>
            </header>
        </div>
    );
}

export default Projects;