
import logo from "../../app/assets/img/logo.png"
// import "./Navbar.css"
import { useAuth } from '../Context/context';
import styled from "styled-components";
import Navlink from "./Navlink";
import Reac, { useState } from "react";
// import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Hamburger from "hamburger-react";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
background-color: orange;
color: #fff;
max-height: 110px;
text-decoration: none;
position: sticky;
top: 0;
z-index: 1;  
`;
const Li = styled.li`
  list-style: none;
  display: block;
  text-decoration: none;
  margin-top: 5px;
  color: white;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  @media screen and (max-width:1000px) {
    width: 100%;
    text-align: center;
    margin: 0.2rem 0.5rem;

  }
`;
const Logo = styled.div`
width: 20em; 
height: auto;
margin-left: 20px;
margin-top:-20px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (max-width:1000px) {
    display: none;
    flex-direction: column;
    width: 100% !important;
    margin-top: 267px;
    margin-bottom: 0.25rem;
    background-color: rgb(212, 57, 18) !important;
    &.open {
      display: flex;
      z-index: 5;
      right: 0;
      top: -195px;
      position: absolute;
  }}
`;

const Pan = styled.div`
  display: none;
  width: auto;
  margin-top: -9px;
  position: relative;
 
  @media screen and (max-width:1000px) {
  display: flex;
  }
`;

const LogoContainer = styled.div`
  width: 20em;
`;

const Navbar = () => {
  const { logout, currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
//   const { toggleColorMode } = useColorMode();


  return (
    <Nav>
      <LogoContainer>
        <Image src={logo} width="300" height="100" alt="logo" />
      </LogoContainer>
      <div className="navbar__search">
      </div>
      <div>
          <Ul className={isOpen ? "open" : ""}>
          <Li>
              <Navlink to="/" name="Home" />
            </Li>
          <Li>
              {currentUser && <Navlink to="/show" name="Adm" />}
            </Li>
            <Li>
              {!currentUser && <Navlink to="/login" name="Ingresar" />}
              {currentUser && (
                <Navlink
                  to="/"
                  name="Salir"
                  onClick={async () => {
                    await logout();
                  }}
                />
              )}
            </Li>
            <Li>
              {/* <IconButton
                variant="ghost"
                icon={useColorModeValue(<FaSun />, <FaMoon />)}
                onClick={toggleColorMode}
                color={"white"}
                aria-label="toggle-dark-mode"
              /> */}
            </Li>
            </Ul>
            <Pan>
            <Hamburger  toggled={isOpen} toggle={setIsOpen} duration={0.8} color="coral" />
          </Pan>
            </div>
    </Nav>
  );
};

export default Navbar;
