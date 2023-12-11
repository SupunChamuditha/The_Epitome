import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const SubFooter = () => {
  return (
    <footer>
      <div className="footer__bottom">
        <Container>
          <Row>
            <Col lg="12">
              <div className="copyright__section">
                <p>
                  <a href="#">The Epitome Hotel, Kurunagala</a>
                </p>

                <p>
                  &copy;Copyright 2023, Developed by{" "}
                  <a href="#">Pasith Senevirathna</a>. All rights reserved.
                </p>

                <p className="footer__dev_contact">
                  <span>
                    <a href="#">
                      <i class="ri-github-fill"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i class="ri-facebook-circle-line"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i class="ri-linkedin-box-fill"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i class="ri-instagram-line"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i class="ri-youtube-fill"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i class="ri-twitter-x-fill"></i>{" "}
                    </a>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SubFooter;
