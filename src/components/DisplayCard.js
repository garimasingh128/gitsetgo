import React from "react";
import "./css/animate.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap.min.css.map";
// import "./css/fontawsom-all.min.css";
import "./css/style.css";
import undraw from "./images/undraw2.svg";
import "./css/style.css.map";

import "./js/popper.js";
// import "./js/jquery-3.2.1.min.js";
// import "./js/popper.min.js";
// import "./js/bootstrap.min.js";
// import "./js/script.js";

import ReactDOM from "react-dom";
import ReactToPdf from "react-to-pdf";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ref = React.createRef();
const options = {
  unit: "cm",
};

const DisplayCard = ({ data, repositories }) => {
  return (
    <div className="container-fluid overcover" style={{ marginBottom: 100 }}>
      {data.name ? (
        <div>
          <ReactToPdf
            targetRef={ref}
            filename="resume_github.pdf"
            options={options}
            scale={0.7}
          >
            {({ toPdf }) => (
              <button
                style={{ marginLeft: 20, marginTop: 20 }}
                className="ui red button"
                type="submit"
                onClick={toPdf}
              >
                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> Generate
                Pdf
              </button>
            )}
          </ReactToPdf>
          <div className="container profile-box" ref={ref}>
            <div className="row">
              <div className="col-md-4 left-co">
                <div className="left-side">
                  <div className="profile-info">
                    <img
                      src={data.avatar_url}
                      alt={data.avatar_url}
                      style={{ marginTop: 30 }}
                    ></img>{" "}
                    <h3>{data.name}</h3>
                  </div>
                  <h4 className="ltitle">Contact</h4>

                  {data.email ? (
                    <div className="contact-box pb0">
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                        <div className="detail">{data.email}</div>
                      </div>
                    </div>
                  ) : (
                    <div> </div>
                  )}

                  <div className="contact-box pb0">
                    <div className="icon">
                      <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                    </div>
                    <div className="detail">{data.location}</div>
                  </div>

                  <h4 className="ltitle">Twitter</h4>
                  <ul className="row social-link no-margin">
                    <li> @{data.twitter_username}</li>
                  </ul>
                  <h4 className="ltitle">Organisations</h4>

                  <div className="refer-cov">
                    <b>{data.company}</b>
                  </div>

                  <h4 className="ltitle">
                    Followers: <i className="fas fa-pencil-alt"></i>
                    {data.followers}
                  </h4>

                  <h4 className="ltitle">
                    Following: <i className="fas fa-pencil-alt"></i>
                    {data.following}
                  </h4>

                  <h4 className="ltitle">
                    Profile created on: <br></br>{" "}
                    <i className="fas fa-pencil-alt"></i>
                    {data.created_at}
                  </h4>

                  <h4 className="ltitle">
                    Profile last updated on: <br></br>{" "}
                    <i className="fas fa-pencil-alt"></i>
                    {data.updated_at}
                  </h4>
                </div>
              </div>
              <div className="col-md-8 rt-div">
                <div className="rit-cover">
                  <div className="hotkey">
                    <h1 className="">{data.name}</h1>
                    <small>{data.login}</small>
                  </div>
                  <h2 className="rit-titl">
                    <i className="far fa-user"></i>About
                  </h2>
                  <div className="about">
                    <p>{data.bio}</p>
                  </div>
                  <h2 className="rit-titl">
                    <i className="far fa-user"></i>Public Repositories:{" "}
                    {data.public_repos}{" "}
                  </h2>
                  <h2 className="rit-titl">
                    <i className="far fa-user"></i>Public Gists:{" "}
                    {data.public_gists}{" "}
                  </h2>

                  <h2 className="rit-titl">
                    <i className="fas fa-briefcase"></i>Repositories
                  </h2>

                  <div className="extra content">
                    <a>
                      <i className="address card icon"></i>
                      {repositories.map((repo) => (
                        <div
                          classNameName="ui relaxed divided list"
                          key={repo.name}
                        >
                          <div classNameName="item">
                            <i classNameName="large github middle aligned icon"></i>
                            <div classNameName="content">
                              <ul>
                                <li>
                                  <a
                                    href={repo.html_url}
                                    classNameName="header"
                                    target="_blank"
                                  >
                                    {repo.name}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </a>
                  </div>

                  <h2 className="rit-titl">
                    <i className="fas fa-graduation-cap"></i>Important Links
                  </h2>
                  <div className="education">
                    <ul className="row no-margin">
                      <li className="col-md-6">
                        <span>
                          Blog:
                          <spacer />
                        </span>
                        {data.blog}
                      </li>
                      <li className="col-md-6">
                        <span>
                          Github Profile:
                          <spacer />
                        </span>
                        {data.html_url}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div >
          <img src={undraw} style={{width: 1500, height: 400, marginTop: 40}}></img>
          </div>
      )}
    </div>
  );
};

export default DisplayCard;

//https://api.github.com/users/garimasingh128/repos
