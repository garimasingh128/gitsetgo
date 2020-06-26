import React, { useState } from "react";
import DisplayCard from "./DisplayCard";

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in'
};

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div style={{ padding: 20 }} ref={ref}>
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
           <Pdf targetRef={ref} filename="timeline_github.pdf" options={options} x={-1}>
        {({ toPdf }) => <button  style={{ marginLeft: 20 }}
            className="ui red button"
            type="submit" onClick={toPdf}><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> Generate Pdf</button>}
      </Pdf>
          <center>
            
            <DisplayCard
              style={{ marginTop: 100 }}
              data={data}
              repositories={repositories}
            />
          </center>
        </div>
        
      </div>
    </>
  );
};
export default Profile;
