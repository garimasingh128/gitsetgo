import React from "react";
import styled from "styled-components";
import logo from "./daftpunktocat.gif";
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
        />{" "}
      </nav>
      <spacer /> <nav class="navbar navbar-light bg-light" ><a href="https://github.com/mrinal41298/gitsetgo">Git Set Go</a> </nav>{" "}
      <spacer />  <spacer />  <spacer />  <spacer />  <spacer /> <center><nav class="navbar navbar-dark bg-dark"> <p style={{fontSize: 15 }}>An open-source Github contribution Timeline </p></nav></center>{" "}
    </NavbarC>
  );
};
export default Header;

const NavbarC = styled.div`
  background: #343A40;
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
