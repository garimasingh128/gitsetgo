import React from "react";

const DisplayCard = ({ data, repositories }) => {
    return (

        <
        div class = "ui card"
        style = {
            { marginTop: 50, width: 600 } } >

        <
        div class = "card" >
        <
        div class = "blurring dimmable image" >
        <
        div class = "ui dimmer" >
        <
        div class = "content" >
        <
        div class = "center" >
        <
        a href = { data.html_url } >
        <
        div class = "ui inverted button" > Github Profile < /div> <
        /a> <
        /div> <
        /div> <
        /div> <
        img src = { data.avatar_url }
        alt = { data.avatar_url } >
        <
        /img> <
        /div> <
        div class = "content" >
        <
        h1 class = "ui Black header" > Profile Card < /h1> <
        h1 class = "ui violet inverted header" > { data.name } < /h1> <
        div class = "meta" >
        <
        h2 class = "ui grey inverted header" > Location: { data.location } < /h2> <
        /div> <
        div class = "description" >
        <
        h3 class = "ui brown inverted header" > { data.bio } < /h3> <
        /div> <
        div class = "description" >
        <
        h3 class = "ui black header" > Companies: { data.company } < /h3> <
        /div>

        <
        center >

        <
        div class = "ui statistics" >
        <
        div class = "red statistic" >
        <
        div class = "value" > { data.followers } <
        /div> <
        div class = "label" >
        Followers <
        /div> <
        /div>


        <
        div class = "green statistic" >
        <
        div class = "value" > { data.following } <
        /div> <
        div class = "label" >
        Following <
        /div> <
        /div>


        <
        div class = "pink statistic" >
        <
        div class = "value" > { data.public_repos } <
        /div> <
        div class = "label" >
        Public repositories <
        /div> <
        /div>

        <
        div class = "blue statistic" >
        <
        div class = "value" > { data.public_gists } <
        /div> <
        div class = "label" >
        Public Gists <
        /div> <
        /div> <
        /div> <
        /center>


        <
        div class = "extra content" >
        <
        a >
        <
        i class = "twitter icon" > < /i>
        Twitter: { data.twitter_username } <
        /a> <
        /div>   <
        /div> {
            /* <div class="extra content">
                <a>
                  <i class="address card icon"></i>
                  {repositories.map(repo => (
                          <div className="ui relaxed divided list" key={repo.name}>
                            <div className="item">
                              <i className="large github middle aligned icon"></i>
                              <div className="content">
                                <a href={repo.html_url} className="header" target="_blank">
                                  {repo.name}
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                </a>
              </div> */
        }

        <
        /div> <
        /div>
    );
};

export default DisplayCard;

//https://api.github.com/users/garimasingh128/repos