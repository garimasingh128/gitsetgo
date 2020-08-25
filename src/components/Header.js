import React from "react";
import styled from "styled-components";
import logo from "./images/daftpunktocat.gif";
const Header = () => {
  return (
    <NavbarC>
      {" "}
      <nav class="navbar navbar-dark bg-dark">
        <img
          src={logo}
          width="50"
          height="40"
          class="d-inline-block align-top"
          alt=""
        />
      </nav>
     {" "}
      <nav class="navbar navbar-light " style={{ background: "#343a40" }}>
        <a
          href="./"
          style={{ color: "#ffffff" }}
        >
          Git Set Go
        </a>{" "}
      </nav>{" "}
      <spacer /> <spacer /> <spacer /> <spacer /> <spacer />{" "}
      <center>
        <nav class="navbar navbar-dark bg-dark">
          {" "}
          <p style={{ fontSize: 15 }}>
            A Personalised Github Resume{" "}
          </p>
        </nav>
      </center>{" "}
    </NavbarC>
  );
};
export default Header;
const NavbarC = styled.div`
  background: #343a40;
  color: #ffffff;
  font-size: 25px;
  font-family: cursive;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  spacer {
    flex: 0.01;
  }
`;
