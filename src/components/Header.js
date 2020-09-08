import React, { useState } from "react";
import styled from "styled-components";
import logo from "./images/daftpunktocat.gif";

=======
import '../App.css';

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
     {""}
     <spacer/> <spacer/>
     <center>
      <nav class="navbar navbar-light " style={{ background: "#343a40" }}>
        <a
          href="./"
          style={{ color: "#ffffff" }}
        >
          Git Set Go
        </a>{" "}
      </nav>{" "}
      <spacer /> <spacer /> <spacer /> <spacer /> <spacer />{" "}
      
        <nav class="navbar navbar-dark bg-dark">
          {" "}
          <p style={{ fontSize: 15 }}>
            A Personalised Github Resume{" "}
          </p>
        </nav>
      </center>{" "}
        <nav class="navbar navbar-dark bg-dark">
          {" "}
          <input id ="themeBox" type="checkbox"></input>
        </nav>
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
  justify-content:center:
  flex-direction:coloumn;
  height: 100%;
  padding: 0 1rem;
  spacer {
    flex: 0.03;
  }
`;
