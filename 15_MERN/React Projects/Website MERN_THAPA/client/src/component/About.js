import React, {useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import a3 from "../images/a3.png";
function About() {
  const history = useHistory();

  const [userData, setUserData] = useState({
      name : "",
      work : "",
      phone : "",
      email : "",
      
  });

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

    //   console.log(data);

      if ((res.status !== 200) | !data) {
        throw new Error(res.error);
      }else{
          setUserData(data);
      }
    } catch (err) {
      console.log("about.js " + err);
      history.push("/login");
    }
  };

useEffect(()=>{
    callAboutPage();
}, [])

  return (
    <div className="container">
      <form  method="GET">
        <div className="row">
          <div className="col-md-4">
            <img style={{ height: 100, width: 100 }} src={a3} alt="" />
          </div>

          <div className="col-md-6">
            <h2>{userData.name}</h2>
            <p>{userData.work}</p>

            <p>
              Ranking <b>10/10</b>
            </p>

            <ul className="nav nav-tabs" id="nav-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <button name="btnaddmore" className="btn btn-primary">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <a href="#">YouTube</a>
            <br />
            <a href="#">YouTube</a>
            <br />
            <a href="#">YouTube</a>
            <br />
            <a href="#">YouTube</a>
            <br />
            <a href="#">YouTube</a>
            <br />
          </div>

          <div className="col-md-8 tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                <div className="com-md-6 d-flex justify-content-between">
                  <label>User ID</label>
                  <p>{userData._id}</p>
                </div>
                <div className="com-md-6 d-flex justify-content-between">
                  <label>Name</label>
                  <p>{userData.name}</p>
                </div>
                <div className="com-md-6 d-flex justify-content-between">
                  <label>Work</label>
                  <p>{userData.work}</p>
                </div>
                
                <div className="com-md-6 d-flex justify-content-between">
                  <label>Email</label>
                  <p>{userData.email}</p>
                </div>

                <div className="com-md-6 d-flex justify-content-between">
                  <label>Phone</label>
                  <p>{userData.phone}</p>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="row">
                <div className="col-md- d-flex justify-content-between ">
                  <label>Experience</label>
                  <p>EXPERT</p>
                </div>
                <div className="col-md- d-flex justify-content-between ">
                  <label>Experience</label>
                  <p>EXPERT</p>
                </div>
                <div className="col-md- d-flex justify-content-between ">
                  <label>Experience</label>
                  <p>EXPERT</p>
                </div>
                <div className="col-md- d-flex justify-content-between ">
                  <label>Experience</label>
                  <p>EXPERT</p>
                </div>
                <div className="col-md- d-flex justify-content-between ">
                  <label>Experience</label>
                  <p>EXPERT</p>
                </div>
                <div className="col-md- d-flex justify-content-between ">
                  <label>Experience</label>
                  <p>EXPERT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default About;
