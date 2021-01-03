import React, { useState } from "react";
import DisplayCard from "./DisplayCard";



const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(false);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const profile = await fetch(`https://api.github.com/users/${username}`);
      if(!profile.ok) {
        setError(true);
        throw new Error("User Not Found");
      } 
      const profileJson = await profile.json();
      console.log(profileJson);
      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      console.log(repoJson);
      if(!profileJson.name) {
        setError(true)
      }
      if (profileJson) {
        setData(profileJson);
        setRepositories(repoJson);
      }
    }  catch(e) {
      throw new Error("Something went wrong");
    }
  };

  const closeAlert = () => {
    setError(false);
  };
  return (
    <>
      <div style={{ padding: 20 }} >
        <div className="ui search">
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
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Go ahead!
          </button>
          
          <center>
            
            <DisplayCard
              error={error}
              data={data}
              repositories={repositories}
              closeAlert={closeAlert}
            />
          </center>
        </div>
        
      </div>
    </>
  );
};
export default Profile;
