import React from "react";
import "./footer.css";
import SubFooter from "./SubFooter";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

const footerCompanyLink = [
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "#",
  },
  {
    display: "Info",
    url: "#",
  },
];

const footerFurtherLinks = [
  {
    display: "Terms & Conditions",
    url: "#",
  },
  {
    display: "Privacy Policy",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div>
            <h5 className="footer__link-title">Company</h5>
            <ListGroup>
              {footerCompanyLink.map((item, index) => (
                <ListGroupItem key={index} className="link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          <div>
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup>
              <ListGroupItem className="link__item">
                <a href="">
                  <i className="ri-map-pin-line"></i> No 57, Dabulla Road,{" "}
                  <br />
                  Badagamuwa, Kurunagala,
                  <br /> Sri Lanka{" "}
                </a>
              </ListGroupItem>

              <ListGroupItem className="link__item">
                <a href="">
                  <i className="ri-mail-line"></i> info@epitomehotel.com{" "}
                </a>
              </ListGroupItem>

              <ListGroupItem className="link__item">
                <a href="">
                  <i className="ri-phone-line"> </i>+94 76-9990 990{" "}
                </a>
              </ListGroupItem>
            </ListGroup>
          </div>
          <div>
            <h5 className="footer__link-title">Further Information</h5>
            <ListGroup>
              {footerFurtherLinks.map((item, index) => (
                <ListGroupItem key={index} className="link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          <div>
            <h5 className="footer__link-title">Social Media</h5>
            <ListGroup>
              <ListGroupItem className="link__item">
                <a href="">
                  <i class="ri-facebook-circle-line"></i> Facebook{" "}
                </a>
              </ListGroupItem>

              <ListGroupItem className="link__item">
                <a href="">
                  <i class="ri-linkedin-box-fill"></i> LinkedIn{" "}
                </a>
              </ListGroupItem>

              <ListGroupItem className="link__item">
                <a href="">
                  <i class="ri-instagram-line"></i> Instagram{" "}
                </a>
              </ListGroupItem>

              <ListGroupItem className="link__item">
                <a href="">
                  <i class="ri-youtube-fill"></i> YouTube{" "}
                </a>
              </ListGroupItem>

              <ListGroupItem className="link__item">
                <a href="">
                  <i class="ri-twitter-x-fill"></i> Twitter-X{" "}
                </a>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <SubFooter />
      </Container>
    </footer>
  );
};

export default Footer;
