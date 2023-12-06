import React from "react";
import "./css/NavBar1.css";
import logo from "./img/Epitome_logo.png";
import user from "./img/Ellipse.png";

function NavBar1() {
  return (
    <div>
      <nav>
        <div class="navigation-bar">
          <div class="all-components">
            <img class="logo" src={logo} />
            <div class="navigation-text">
              <div class="text-wrapper">
                <a href="http://">1st Title</a>
              </div>
              <div class="text-wrapper">
                <a href="http://">2nd Title</a>
              </div>
              <div class="text-wrapper">
                <a href="http://">3rd Title</a>
              </div>
              <div class="sign-in">
                <a href="http://">
                  <img class="ellipse" src={user} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar1;
