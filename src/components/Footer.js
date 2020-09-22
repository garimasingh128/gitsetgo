import React from "react";
import "./styles.css";
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
        position: " absolute",
        margin: 0,
        padding: 0,
        borderSize: "border-box"
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
      <div className="container">
        <div className="row">
          <div className="col-md-4 col 12">
            <h3
              style={{
                backgroundColor: "white",
                color: "black",
                width: 110,
                height: 35,
                marginTop: 5,
                borderStyle: "solid",
                borderColor: "black",
                border: 1,
                borderRadius: 7
              }}
            >
              Gitsetgo
            </h3>

            <div>
              <div>Home</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{ marginTop: 40 }}>
            <h4 style={{ color: "lightgrey" }}> Resources </h4>
            <ul className="list-unstyled">
              <li>Privacy Policy </li>
            </ul>
          </div>
          <div className="col-md-4 col-12" style={{ marginTop: 40 }}>
            <h4 style={{ color: "lightgrey", textAlign: "justify" }}>
              {" "}
              About{" "}
            </h4>
            <p>
              A Github Resume generator to create your own personalised resume
              based on your Github profile.
            </p>
          </div>
          <div className=" col-12">
            <i
              class="fa fa-facebook-official"
              aria-hidden="true"
              style={{
                padding: 10,
                color: "white",
                float: "left",
                fontSize: 25
              }}
            >
              {" "}
            </i>
            <i
              class="fa fa-twitter-square"
              aria-hidden="true"
              style={{
                padding: 10,
                color: "white",
                float: "left",
                fontSize: 25
              }}
            ></i>
            <i
              class="fa fa-github-square"
              aria-hidden="true"
              style={{
                padding: 10,
                color: "white",
                float: "left",
                fontSize: 25
              }}
            ></i>
          </div>
          <div
            className="col-12"
            style={{ fontSize: 14, color: "lightgrey", textAlign: "center" }}
          >
            &copy; {new Date().getFullYear()} GitSetGo | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
