import React, { useState } from "react";
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

const DisplayCard = ({ data, repositories, langs, orgs }) => {
  const repos = [];
  const [image, setImage] = useState(data.avatar_url);
  const imgChange = (e) => {
		setImage(URL.createObjectURL(e.target.files[0]));
	};
  repositories.filter((repo) => (repo.fork === false)).map((repo, i) => (
    repos.push(
      <tr key={repo.name} >
        <td>{i+1}</td>
        <td> 
          <a  href={repo.html_url} 
              target="_blank"
              rel="noopener noreferrer">
            {repo.name}
          </a>
        </td>
        <td>{repo.language}</td>
      </tr>
    )
  ))

  return (

    <div className="container-fluid overcover" style={{ marginBottom: 100 }}>
      {data.name ? (
        <div>
          <ReactToPdf
            targetRef={ref}
            filename = {data.name + "_Github_Resume"}
            options={options}
            scale={0.7}
            style={{height:500}}
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
          <div className="container profile-box" ref={ref} style = { {marginTop: 40}}>
            <div className="row">
              <div className="col-md-4 left-co" >
                <div className="left-side">
                  <div className="profile-info" >
                    <img
                      src={image}
                      alt={"profile_pic"}
                      style={{ marginTop: 60 }}
                    ></img>{" "}
                    <form>
                      <input
                        type="file"
                        name="user[image]"
                        style={{ color: "transparent", marginTop: 10, marginLeft: 50}}
                        onChange={imgChange}
                      />
                    </form>
                    <h3 >{data.name}</h3>
                  </div>
                  <h4 className="ltitle">Top Languages</h4>
                  <div>{langs.filter((lang) => lang.label !== "Others").slice(0, 3).map((lang) => (
                    <div key={lang.label}>
                      <img src={"https://img.shields.io/badge/-" + lang.label + "-" + lang.color.replace('#', '')} alt={`${lang.label}`}/>
                    </div>
                  ))}</div>
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

                  <div>{orgs.map((organization) => (
                      <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"https://github.com/" + organization.login}
                      >
                        <img
                          src={organization.avatar_url}
                          alt={organization.avatar_url}
                          style={{ marginTop: 15, width: 50, marginLeft: 10 }}
                        ></img>
                      </a>
                  ))}</div>

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
                  </div><br></br>
                  <h2 className="rit-titl">
                    <i className="far fa-user"></i>About
                  </h2>
                  <div className="about">
                    <p>{data.bio}</p>
                  </div><br></br>
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
                  
                  <div className="extra content" style={{ overflowX: "auto"}}>
                    <a>
                      <i className="address card icon"></i>
                      <table>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Repository Name</th>
                            <th>Language</th>
                          </tr>
                        </thead>
                        <tbody>
                          {repos}
                        </tbody>
                      </table>
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
                        <a href={data.blog}>{data.blog}</a>
                      </li>
                      <li className="col-md-6">
                        <span>
                          Github Profile:
                          <spacer />
                        </span>
                        <a href={data.html_url}>{data.html_url}</a>
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
