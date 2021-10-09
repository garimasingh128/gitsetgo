import React,{ useState } from "react";
import styled from "styled-components";
import {MdCancel} from "react-icons/md"
import {HiMailOpen} from "react-icons/hi"
import {AiFillGithub,AiOutlineTwitter} from "react-icons/ai"

function Footer() {
  let color_scheme =
    window.localStorage.getItem("theme") === "light"
      ? "no-preference: light; light: ligth; dark: light;"
      : "no-preference: dark; dark: dark; light: dark;";
  const [modal, setmodal] = useState(false);

  return (
    <>
    <footer style={{ background: "#343a40" }}>
      <div style={{ marginTop: 5 }}>
        <center>
          {" "}
          Made with
          <heart> ❤ </heart> by
          <a target="_blank" href="https://github.com/garimasingh128" style={{ color: "#59b7ff" }}
          >
            {" "}
            Garima Singh{" "}
          </a>{" "}
          and
          <a target="_blank" href="https://github.com/mrinal41298" style={{ color: "#59b7ff" }}
          >
            {" "}
            Mrinal
          </a>
        </center>
        <br />
        <div className="git-footer" style={{ marginBottom: 5, marginTop: -10 }}>
          <a
            className="github-button"
            href="https://github.com/garimasingh128"
            style={{ marginRight: 10 }}
            aria-label="Follow @garimasingh128 on GitHub"
          >
            Follow @garimasingh128
          </a>
          <spacer />
          <a
            className="github-button"
            style={{ margin: 10 }}
            href="https://github.com/mrinal41298"
            aria-label="Follow @mrinal41298 on GitHub"
          >
            <spacer />
            Follow @mrinal41298
          </a>
        </div>
        <div className="contact">
          <button onClick={()=> setmodal(!modal)}>Contact Us</button>
        </div>
      </div>
    </footer>
      {modal && <div className="bg-modal">
        <div className="contactmodal">
          <h1>CONTACT</h1>
          <span class="cancel" onClick={()=> setmodal(!modal)}><MdCancel /></span>
          <p className="underline"></p>
          <div className="social">
            <div className="link">
              <a href="mailto: garingh128@gmail.com" target="_blank">
                <span class="icon"><HiMailOpen /></span>
                <span class="title">garingh128@gmail.com</span>
              </a>
              <a href="https://twitter.com/garysingh128" target="_blank">
                <span class="icon"><AiOutlineTwitter /></span>
                <span class="title">@garysingh128</span>
              </a>
              <a href="https://github.com/garimasingh128/" target="_blank">
                <span class="icon"><AiFillGithub /></span>
                <span class="title">garysingh128</span>
              </a>
            </div>
          </div>
        </div>
      </div> }
    </>
    
  );
}

export default Footer;

// data-color-scheme="no-preference: dark; light: dark; dark: dark;"
// data-color-scheme="no-preference: dark; light: dark; dark: dark;"

const heart = styled.div`
  color: red;
`;
