import React from "react";

import styled from "styled-components";

function Footer() {
  let color_scheme =
    window.localStorage.getItem("theme") === "light"
      ? "no-preference: light; light: ligth; dark: light;"
      : "no-preference: dark; dark: dark; light: dark;";
  return (
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
      </div>
    </footer>
  );
}

export default Footer;

// data-color-scheme="no-preference: dark; light: dark; dark: dark;"
// data-color-scheme="no-preference: dark; light: dark; dark: dark;"

const heart = styled.div`
  color: red;
`;
