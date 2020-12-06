/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styled from "styled-components";
import DisplayCard from "./DisplayCard";

import Loader from "./images/Loader.svg";
import GhPolyglot from "gh-polyglot";

const Profile = () => {
  const [data, setData] = useState(sessionStorage.getItem("data") ? JSON.parse(sessionStorage.getItem("data")) : {});
  const [username, setUsername] = useState(sessionStorage.getItem("username") ? sessionStorage.getItem("username") : "");
  const [repositories, setRepositories] = useState(sessionStorage.getItem("repo") ? JSON.parse(sessionStorage.getItem("repo")) : []);
  const [isLoading, setLoading] = useState(false);
  const [langs, setLangs] = useState(sessionStorage.getItem("langs") ? JSON.parse(sessionStorage.getItem("langs")) : []);
  const [orgs, setOrgs] = useState(sessionStorage.getItem("orgs") ? JSON.parse(sessionStorage.getItem("orgs")) : []);
  const [errorMessage, setErrorMessage] = useState(false);


  const onChangeHandler = (e) => {
    setUsername(e.target.value);
    sessionStorage.setItem("username", e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const profile = await fetch(`https://api.github.com/users/${username}`);
      const profileJson = await profile.json();
      const me = new GhPolyglot(profileJson.login);
      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      const orgs = await fetch(profileJson.organizations_url)
      const orgsJson = await orgs.json();
      if (profileJson) {
        setData(profileJson);
        sessionStorage.setItem("data", JSON.stringify(profileJson));
        setRepositories(repoJson);
        sessionStorage.setItem("repo", JSON.stringify(repoJson));
        setOrgs(orgsJson);
        sessionStorage.setItem("orgs", JSON.stringify(orgsJson));
        me.userStats((err, stats) => {
          setLangs(err || stats);
          sessionStorage.setItem("langs", JSON.stringify(stats));
        });
      }
    } catch (err) {
      console.log(err.message);
      setErrorMessage(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          {isLoading ? (
            <div style={{ marginTop: "60px" }}>
              <object type="image/svg+xml" data={Loader} />
            </div>
          ) : (
            <div>
              <div className="ui icon input">
                <i className="search icon"></i>
                <input
                  className="prompt"
                  placeholder="Whom you wanna stalk?"
                  type="text"
                  value={username}
                  onChange={onChangeHandler}
                />
              </div>

              <button
                style={{ marginLeft: 20 }}
                className="ui violet button"
                type="submit"
                onClick={submitHandler}>
                <i className="github icon"></i>
                Go ahead!
              </button>
            <div>
            {errorMessage ? (
              <center>
                <img
                  src={this.image}
                  alt={this.image}
                  style={{width: 250, height: 100, marginTop: 40}}
                  >
                </img>
                <h1 >User Not Found!!</h1>
              </center>
            ) : (
              <center>
                <DisplayCard
                  data={data}
                  repositories={repositories}
                  langs={langs}
                  orgs={orgs}
                  />
              </center>
            )}
              </div>
           </div>)}
        </div>
      </div>
    </div>
     );
 };
export default Profile;
const ProfileC= styled.div`
  @media screen and (max-width:425px){
    .search{
      margin-top:15px;
    }
    .violet{
      margin-left: 10px;
      margin-right: 20px;
      margin-top: 20px;
    }
  }
`;
