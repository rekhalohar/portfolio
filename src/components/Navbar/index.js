import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  display: flex;
  z-index: 0;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  @media screen and (max-width: 660px) {
    padding: 0 6px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 660px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 660px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const GithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  background-color: transparent;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 0 24px;
  background: ${({ theme }) => theme.card_light}; /* Fix background color */
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: ${({ open }) => (open ? 1 : -1)};
`;

const MobileMenuLinks = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  // const theme = useThMenuLinks // If useThMenuLinks is a custom hook, make sure it's properly imported or defined
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px", // Add "px"
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" />
            <span>portfolio</span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          {/* Replace the below button with appropriate logic */}
          <GithubButton>Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
      <MobileMenu open={open}>
        <MobileMenuLinks
          href="#about"
          onClick={() => {
            setOpen(!open);
          }}
        >
          About
        </MobileMenuLinks>
        <MobileMenuLinks
          href="#Skills"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Skills
        </MobileMenuLinks>

        <MobileMenuLinks
          href="#Experience"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Experience
        </MobileMenuLinks>
        <MobileMenuLinks
          href="#Projects"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Projects
        </MobileMenuLinks>
        {/* <GithubButton
          style={{
            padding: "10px 16px",
            background: `${theme.promary}`,
            color: "white",
            width: "max-content",
          }}
          href={Bio.github}
          target="_blank"
        >
          {" "}
          Github profile
        </GithubButton> */}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
