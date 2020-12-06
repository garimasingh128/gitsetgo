import React, { useState } from "react";
import styled from "styled-components";
import logo from "./images/daftpunktocat.gif";
import '../App.css';


const Header = () => {
  return (
    
    <NavbarC>
      {" "}
      <nav class="navbar navbar-dark bg-dark logo">
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
     
      <nav class="navbar navbar-light head" style={{ background: "#343a40" }}>
        <a
          href="./"
          style={{ color: "#ffffff" }}
          class="head-line"

        >
          Git Set Go
        </a>{" "}
      </nav>
      {" "}
      <spacer /> <spacer /> <spacer /> <spacer /> <spacer />{" "}
        <nav class="navbar navbar-dark bg-dark subhead">
          {" "}
          <p className="nav-text">
            A Personalised Github Resume{" "}
          </p>
        </nav>{" "}
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
  @media screen and (max-width:600px) {
      display: block ;
      .logo{
        position:absolute;
        z-index:1;
      }
      .head-line{
        margin:auto;
      }
      .head{
        position:relative;
      }
  }
  @media screen and (max-width:400px) {
    padding-left: 0.5rem;
    text-align:left;
    .head-line{
      margin:0;
    }
    .logo{
      padding: 7px 0;
      position:static;
      float:left;

    }
    .subhead{
      clear:left;
    }
  }
  spacer {
    flex: 0.03;
  }
`;
