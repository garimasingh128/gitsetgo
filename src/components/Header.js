import React from "react";
import styled from 'styled-components';
import logo from "./daftpunktocat.gif";
const Header = () => {
    return ( <
        NavbarC >
        <
        nav class = "navbar navbar-light bg-light" >
        <
        img src = { logo }
        width = "50"
        height = "50"
        class = "d-inline-block align-top"
        alt = "" / > < /
        nav >
        <
        spacer / > <
        nav class = "navbar navbar-light bg-light" >

        Git Set Go < /
        nav > < /NavbarC >
    );
};
export default Header;

const NavbarC = styled.div `
background: #1a1a1a;
color: #ffffff;
font-size: 25px;
display: flex;
align-items: center;
height: 100%;
padding: 0 1rem;
spacer{
    flex: 0.01;
}
`;