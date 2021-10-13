import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Projects" component={Projects}></Route>
        <Route path="/Shop" component={Shop}></Route>
        <Route path="/AboutUs" component={AboutUs}></Route>
        <Route path="/OurTeam" component={OurTeam}></Route>
        <Route path="/ContactUs" component={ContactUs}></Route>
      </Switch>
    </Router>
  );
}

export default App;
