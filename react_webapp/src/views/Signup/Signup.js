import React, { Component } from "react";

import patient from "../../assets/img/patient.png";
import doctor from "../../assets/img/doctor.webp";

import PatientSignup from "../../components/PatientSignup/PatientSignup";
import DoctorSignup from "../../components/DoctorSignup/DoctorSignup";
// import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Signup.css";

export default class Signup extends Component {
  render() {
    return (
      //   <Router>
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div
                    class="card bg-light text-white mb-3 mx-auto rounded-circle border-primary "
                    style={{ maxWidth: "18" + "rem" }}
                  >
                    <button className="btn">
                      <img class="card-img rounded-circle" src={patient} alt="Card image" />
                    </button>
                  </div>
                  <div
                    class="card text-white bg-light mb-3 mx-auto rounded-circle border-primary "
                    style={{ maxWidth: "18" + "rem" }}
                  >
                    <button className="btn">
                      <img class="card-img rounded-circle" src={doctor} alt="Card image" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //   </Router>
    );
  }
}