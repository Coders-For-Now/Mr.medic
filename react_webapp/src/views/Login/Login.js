import React, { Component } from "react";

import patient from "../../assets/img/patient.png";
import doctor from "../../assets/img/doctor.webp";

import DoctorLogin from "../../components/DoctorLogin/DoctorLogin";
import PatientLogin from "../../components/PatientLogin/PatientLogin";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div
                    className="card bg-light text-white mb-3 mx-auto rounded-circle border-primary"
                    style={{ maxWidth: "18" + "rem" }}
                  >
                    <button className="btn rounded-circle">
                      <img
                        className="card-img rounded-circle"
                        src={patient}
                        alt="Card image"
                      />
                    </button>
                  </div>
                  <div
                    className="card text-white bg-light mb-3 mx-auto rounded-circle border-primary"
                    style={{ maxWidth: "18" + "rem" }}
                  >
                    <button className="btn rounded-circle">
                      <img
                        className="card-img rounded-circle"
                        src={doctor}
                        alt="Card image"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
