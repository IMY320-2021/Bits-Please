function ProjectsPage() {
  return (
    <div className="App">
      <header className="App-header">
            <div className="wrapper">
                <div className="project">
                    <button className="title"></button>
                    <h1>Project 1</h1>
                    <button className="image"><img className='animate-left' src={"./" + 'car1.jpg'}></img></button> 
                </div>
                <div className="project">
                    <button className="title"></button>
                    <button className="image"><img className='animate-right' src={"./" + 'car2.jpeg'}></img></button>
                    <h1>Project 2</h1>
                </div>
                <div className="project">
                    <button className="title"></button>
                    <button className="image"><img className='animate-right' src={"./" + 'car3.jpg'}></img></button>
                    <h1>Project 3</h1>
                </div>
                <div className="project">
                    <button className="title"></button>
                    <button className="image"><img className='animate-right' src={"./" + 'car4.jpg'}></img></button>
                    <h1>Project 4</h1>
                </div>
                <div className="project">
                    <button className="title"></button>
                    <button className="image"><img src={"./" + 'car5.jpg'}></img></button>
                    <h1>Project 5</h1>
                </div>
            </div>
      </header>
    </div>
  );
}

export default ProjectsPage;