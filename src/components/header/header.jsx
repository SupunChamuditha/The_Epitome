import React, { useRef } from "react";
import "./header.css";
import Logo from "../../assent/logo/logo.png";
import { Container } from "reactstrap";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <a href="#"><img src={Logo} alt="" /></a>
          </div>

          <div className="nav__menu" ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))}
                <li className="nav__item">
                  <div>
                    <a className="btn-signin" href="#" onClick={menuToggle}>
                      Sign in
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="sign">
            <div>
              <a className="btn-signin" href="#">
                Sign in
              </a>
            </div>
            <div>
              <a className="btn-signup" href="#">
                Sign up
              </a>
            </div>
          </div>

          <div className="mobile__menu" onClick={menuToggle}>
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
