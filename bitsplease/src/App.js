import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <div className="border">
            <h1 className="neonText">Bits Please</h1>
            <ul>
              <li >
                <a to="/">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Home
                </a>
              </li>
              <li >
                <a to="/about">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Shop
                </a>
              </li>
              <li >
                <a to="/about">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  About Us
                </a>
              </li>
              <li >
                <a to="/about">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Our team
                </a>
              </li>
              <li >
                <a to="/about">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Contact us
                </a>
              </li>
            </ul>
          </div>


        </header>

      </div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About us</h2>;
}

export default App;
