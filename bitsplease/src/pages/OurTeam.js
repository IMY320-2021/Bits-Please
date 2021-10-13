import React from "react";
import "../pages/AboutUs.css";
import "../App.css";

import { Link } from "react-router-dom";
import Christoff from '../assets/Christoff.jpg';
import Chanel from '../assets/Chanel.jpg';
import Jd from '../assets/Jd.jpg';
import Gerard from '../assets/Gerard.jpg';

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
                  src={Christoff}
                  alt="logo"
                />
              </div>

              <div className="Description">
                Hard-working full-stack developer. My curiosity and dedication
                drive me to expand my skill set by exploring new technologies
                and concepts. By combining my strength in solving problems and
                my love for being creative, I create one-of-a-kind software
                experiences.
              </div>

              <div className="Skills">
                <div className="SkillsHeading">Skills:</div>

                <ul className="SkillsUL">
                  <li>
                    <i class="fa fa-bomb"></i>HTML
                  </li>
                  <li>
                    <i class="fa fa-bomb"></i> C++
                  </li>
                  <li className="ThirdLI">
                    <i class="fa fa-bomb"></i> Javascript
                  </li>
                </ul>
              </div>

              <div className="Socials">
                <a
                  href="https://github.com/christoff-linde"
                  class="fa fa-github"
                  target="_blank"
                ></a>
                <a href="#" class="fa fa-google" target="_blank"></a>
                <a
                  href="https://www.linkedin.com/in/christoff-linde/"
                  class="fa fa-linkedin"
                  target="_blank"
                ></a>
              </div>
            </div>

            <div className="MemberInfo">
              <span className="Name">Chanel Mulder</span>

              <div className="Image">
                <img
                  className="Img-Member"
                  src={Chanel}
                  alt="logo"
                />
              </div>

              <div className="Description">
                I enjoy UI/UX design, game design/development, programming, web
                design/development and design. I am a cheerleader and have
                represented South Africa at the cheerleading worlds championship
                in America in 2017.
              </div>

              <div className="Skills">
                <div className="SkillsHeading">Skills:</div>

                <ul className="SkillsUL">
                  <li>
                    <i class="fa fa-bomb"></i>Web design
                  </li>
                  <li>
                    <i class="fa fa-bomb"></i> Java
                  </li>
                  <li className="ThirdLI">
                    <i class="fa fa-bomb"></i> HTML
                  </li>
                </ul>
              </div>
              <div className="Socials">
                <a
                  href="https://github.com/ChanelMulder"
                  class="fa fa-github"
                  target="_blank"
                ></a>
                <a href="#" class="fa fa-google" target="_blank"></a>
                <a
                  href="https://www.linkedin.com/in/chanel-mulder-7273a31bb/"
                  class="fa fa-linkedin"
                  target="_blank"
                ></a>
              </div>
            </div>

            <div className="MemberInfo">
              <span className="Name">Jd Perumal</span>

              <div className="Image">
                <img
                  className="Img-Member"
                  src={Jd}
                  alt="logo"
                />
              </div>

              <div className="Description">
                I have a passion for software development. I have always had a
                creative side but never a medium of expression. Software
                development, more specifically frontend development is the
                outlet that I've found which allows me to express and showcase
                my creativity and passion. Some of my interests and hobbies
                include powerlifting, fitness and nutrition.
              </div>

              <div className="Skills">
                <div className="SkillsHeading">Skills:</div>

                <ul className="SkillsUL">
                  <li>
                    <i class="fa fa-bomb"></i>Java
                  </li>
                  <li>
                    <i class="fa fa-bomb"></i> C++
                  </li>
                  <li className="ThirdLI">
                    <i class="fa fa-bomb"></i> Javascript & React Native
                  </li>
                </ul>
              </div>

              <div className="Socials">
                <a
                  href="https://github.com/JdPerumal"
                  class="fa fa-github"
                  target="_blank"
                ></a>
                <a
                  href="https://www.jdperumal.tech"
                  class="fa fa-google"
                  target="_blank"
                ></a>
                <a
                  href="https://www.linkedin.com/in/jd-perumal/"
                  class="fa fa-linkedin"
                  target="_blank"
                ></a>
              </div>
            </div>

            <div className="MemberInfo">
              <span className="Name">Gerard Nagura</span>

              <div className="Image">
                <img
                  className="Img-Member"
                  src={Gerard}
                  alt="logo"
                />
              </div>

              <div className="Description">
                I am hard-working and energetic with a never-ending need to know
                more. I enjoy software development and have a passion for
                expressing my creativity through it. My ability to work well with others
                helps to contribute to a positive working-environment.

              </div>
              <div className="Skills">
                <div className="SkillsHeading">Skills:</div>
                <div >
                  <ul className="SkillsUL" >
                    <li>
                      <i class="fa fa-bomb"></i>Java
                    </li>
                    <li>
                      <i class="fa fa-bomb"></i> HTML
                    </li>
                    <li className="ThirdLI">
                      <i class="fa fa-bomb"></i> C++
                    </li>
                  </ul>
                </div>
              </div>

              <div className="Socials">
                <a
                  href="https://github.com/MaverickGDN0403"
                  class="fa fa-github"
                  target="_blank"
                ></a>
                <a href="#" class="fa fa-google" target="_blank"></a>
                <a
                  href="https://www.linkedin.com/in/gerard-nagura-5308a217a/"
                  class="fa fa-linkedin"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
