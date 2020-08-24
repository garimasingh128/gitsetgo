import React, { useState } from "react";
import DisplayCard from "./DisplayCard";
import Loader from "./images/Loader.svg";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const profile = await fetch(`https://api.github.com/users/${username}`);
      const profileJson = await profile.json();
      // console.log(profileJson);

      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      // console.log(repoJson);
      if (profileJson) {
        setData(profileJson);
        setRepositories(repoJson);
      }
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          {isLoading ? (
            <div style={{ marginTop: "100px" }}>
              <object type="image/svg+xml" data={Loader} />
            </div>
          ) : (
            <>
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
                <DisplayCard data={data} repositories={repositories} />
              </center>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
