import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../pages/AboutUs.css";
import "../App.css";
import ContactUs from "./ContactUs";

import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="border">
          <h1 className="neonText">About Us</h1>
          <div className="Textbox">
            <p>
              Bits Please is a team of committed, enthusiastic and goal-driven
              humans that want to make the world a better place , starting with
              your business. We believe that we can elevate and escalate the
              success of those who work with us by facilitating the betterment
              of their brand.We believe in equality in both our workplace and
              the world and as such we are a flat company. Together we are all
              equal.
            </p>
          </div>
          <ul>
          <li className="ContactUsButton">
              <Link
                style={{
                  color: "#fff",
                }}
                to="./ContactUs"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
