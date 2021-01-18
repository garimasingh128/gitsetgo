import React from "react";
import styled from "styled-components";
import styles from "./Footer.module.css";
import CSSModuleMapper from "../../utils/cssModuleMapper";

const css = CSSModuleMapper(styles);

function Footer() {
  let color_scheme =
    window.localStorage.getItem("theme") === "light"
      ? "no-preference: light; light: ligth; dark: light;"
      : "no-preference: dark; dark: dark; light: dark;";
  return (
    <footer className={css("footer")}>
      <center>
        {" "}
        Made with
        <heart> ❤ </heart> by
        <a
          target="_blank"
          href="https://github.com/garimasingh128"
          className={css("name")}
        >
          {" "}
          Garima Singh{" "}
        </a>{" "}
        and
        <a
          target="_blank"
          href="https://github.com/mrinal41298"
          className={css("name")}
        >
          {" "}
          Mrinal
        </a>
      </center>
      <br />
      <div className={css("git-footer")}>
        <a
          className="github-button"
          href="https://github.com/garimasingh128"
          aria-label="Follow @garimasingh128 on GitHub"
        >
          Follow @garimasingh128
        </a>
        <spacer />
        <a
          className="github-button"
          href="https://github.com/mrinal41298"
          aria-label="Follow @mrinal41298 on GitHub"
        >
          <spacer />
          Follow @mrinal41298
        </a>
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
