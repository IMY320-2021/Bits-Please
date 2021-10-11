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
          <h1 className="neonText">Bits Please</h1>
          <ul>
            <li ><Link className="App-link" to="/">Home</Link></li>
            <li > <Link className="App-link" to="/about">Shop</Link></li>
            <li > <Link className="App-link" to="/about">About Us</Link></li>
            <li > <Link className="App-link" to="/about">Our team</Link></li>
            <li > <Link className="App-link" to="/about">Contact us</Link></li>
          </ul>
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
