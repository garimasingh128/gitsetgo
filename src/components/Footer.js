import React from "react";

import logo from "./images/logo.jpg"

export default function App() {
  return (
    <footer
      className="bottom"
      style={{
        background: "#343a40",
        color: "#ffffff",
        textAlign: "justify",
        bottom: 0,
        width: "100%",
        
        margin: 0,
        padding: 0,
        borderSize: "border-box",
      
      }}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </head>
      <div className="container" >
        <div className="row">
          <div className="col-md-4 col 12" >
            <img
              src={logo}
              alt=""
              style={{ width:80,height:50 ,marginTop:5,borderStyle:"solid",borderColor:"black",border:1,borderRadius:7}}
            />
            <div>
              <span style={{ display:"inline-block",marginTop:5  }}>Home | Blog | FAQ | Contact | About</span>
            </div>
          </div>
          <div
            className="col-md-3 col-12"
            style={{marginTop:10}}
          >
            <h4 style={{ color: "lightgrey" }}> Resources </h4>
            <ul className="list-unstyled">
              <li>Disclaimer</li>
              <li>Reports</li>
              <li>Terms</li>
              <li>Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div
            className="col-md-4 col-12"
            style={{ marginTop:10 }}
          >
            <h4 style={{ color: "lightgrey" }}> About The Project </h4>
            <div>
              A Github Resume generator to create your own personalised resume
              based on your Github profile. This tool lets you have your resume
              on a single click.
            </div>
          </div>

          <div className="row" style={{ color: "lightgrey", float: "left" }}>
            <div className="col">
              &copy; {new Date().getFullYear()} GitSetGo | All Rights Reserved
            </div>
          </div>
          <div className="col-md-12 col-12">
            <i
              class="fa fa-facebook-official"
              aria-hidden="true"
              style={{ padding: 10 , color:"white",float:"right"}}
            >
              {" "}
            </i>
            <i
              class="fa fa-twitter-square"
              aria-hidden="true"
              style={{ padding: 10 , color:"white",float:"right"}}
            ></i>
            <i
              class="fa fa-github-square"
              aria-hidden="true"
              style={{ padding: 10, color:"white",float:"right" }}
            ></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
