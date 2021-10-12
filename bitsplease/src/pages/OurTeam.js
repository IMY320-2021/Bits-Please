import React from "react";
import "../pages/AboutUs.css";
import "../App.css";

import { Link } from "react-router-dom";

export default function OurTeam() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="borderAU">
          <h1 className="neonText">Our Team</h1>
          <div className="MainContainer">
            <div className="MemberInfo">
              <span className="Name">Christoff Linde</span>

              <div className="Image">
                <img
                  className="Img-Member"
                  src={`${process.env.PUBLIC_URL}/Images/Christoff.jpg`}
                  alt="logo"
                />
              </div>

              <div className="Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non sodales dui. Ut placerat nulla sed nibh tincidunt tincidunt.
                Morbi quis tempor felis. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
              </div>

              <div className="Skills">
                <div className="SkillsHeading">Skills:</div>

                <ul className="SkillsUL">
                  <li>skill1</li>
                  <li>skill2</li>
                  <li>skill3</li>
                </ul>
              </div>

              <div className="Socials">
                <a href="#" class="fa fa-github"></a>
                <a href="#" class="fa fa-google"></a>
                <a href="#" class="fa fa-linkedin"></a>
              </div>
            </div>
            <div className="MemberInfo">
              <span className="Name">Chanel Mulder</span>

              <div className="Image">
                <img
                  className="Img-Member"
                  src={`${process.env.PUBLIC_URL}/Images/Chanel.jpg`}
                  alt="logo"
                />
              </div>

              <div className="Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non sodales dui. Ut placerat nulla sed nibh tincidunt tincidunt.
                Morbi quis tempor felis. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
              </div>

              <div className="Skills">
                <div className="SkillsHeading">Skills:</div>

                <ul className="SkillsUL">
                  <li>skill1</li>
                  <li>skill2</li>
                  <li>skill3</li>
                </ul>
              </div>

              <div className="Socials">
                <a href="#" class="fa fa-github"></a>
                <a href="#" class="fa fa-google"></a>
                <a href="#" class="fa fa-linkedin"></a>
              </div>
            </div>
            <div className="MemberInfo">
              <span className="Name">Jd Perumal</span>

              <div className="Image">
                <img
                  className="Img-Member"
                  src={`${process.env.PUBLIC_URL}/Images/Jd.jpg`}
                  alt="logo"
                />
              </div>

              <div className="Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non sodales dui. Ut placerat nulla sed nibh tincidunt tincidunt.
                Morbi quis tempor felis. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
              </div>

              <div className="Skills">
                <div className="SkillsHeading">Skills:</div>

                <ul className="SkillsUL">
                  <li>skill1</li>
                  <li>skill2</li>
                  <li>skill3</li>
                </ul>
              </div>

              <div className="Socials">
                <a href="#" class="fa fa-github"></a>
                <a href="#" class="fa fa-google"></a>
                <a href="#" class="fa fa-linkedin"></a>
              </div>
            </div>
            <div className="MemberInfo">
              <span className="Name">Gerard Nagura</span>

              <div className="Image">
                <img
                  className="Img-Member"
                  src={`${process.env.PUBLIC_URL}/Images/Gerard.jpg`}
                  alt="logo"
                />
              </div>

              <div className="Description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non sodales dui. Ut placerat nulla sed nibh tincidunt tincidunt.
                Morbi quis tempor felis. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
              </div>

              <div className="Skills">
                <div className="SkillsHeading">Skills:</div>

                <ul className="SkillsUL">
                  <li>skill1</li>
                  <li>skill2</li>
                  <li>skill3</li>
                </ul>
              </div>

              <div className="Socials">
                <a href="#" class="fa fa-github"></a>
                <a href="#" class="fa fa-google"></a>
                <a href="#" class="fa fa-linkedin"></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
