import React from "react";
import { Container } from "reactstrap";
import "./dashboard.css";

import dashimg from "../../assent/heroHome-img/Images.png";

const Dashboard = () => {
  return (
    <section className="hero">
      <Container>
        <div className="dashboard">
          <div className="title-wrapper">
            <p className="title-order">
              <span>
                <span className="span-text-1">Epitome&#39;s</span>
                <span> Order</span>
              </span>

              <span className="span-text-2"> Management</span>
              <span className="span-text-3"> System</span>
            </p>
          </div>
          <div className="img-box">
            <img src={dashimg} alt="" />
          </div>
          <div className="sign-section">
            <p className="sign-in">
              <a href="#">Sign In</a>
            </p>
            <p className="sign-up">
              <a href="#">Sign Up</a>
            </p>
          </div>
          <div className="about-section">
            <p>
              <span className="span-text-3">Some Words About</span> <span className="span-text-4">The Order Management System in The
              Epitome Hotel Kurunagala.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Dashboard;
