import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Flex } from "../layoutComponents"
import { IoMdArrowDropdown } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import { MdLocationOn, MdOutlineEmail } from "react-icons/md"
import { useMenuQuery } from "../../hooks/useMenuQuery"

import Logo from "../../images/scoot-now-logo-white.svg"

const device = {
  sm: "18em",
  md: "56em",
}

const Header = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
`

const Headertop = styled.div`
  padding: 1em 0;
  background: var(--clr-dark);

  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      &:nth-child(2),
      &:nth-child(3) {
        @media screen and (max-width: ${device.md}) {
          display: none;
        }
      }
    }

    & > * + * {
      margin-left: 1.5em;
    }
  }
`

const NavLinkTop = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-light);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }
`

const Headerbottom = styled.div`
  background: var(--clr-dark);
  border-bottom: 1px solid var(--clr-dark);
  box-shadow: var(--shadow-bottom);
  padding: 1em 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const LogoContainer = styled.div`
  img {
    height: 70px;
    transition: 0.4s;

    &[data-active="true"] {
      height: 90px;
    }
  }
`

const Nav = styled.nav`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & > * + * {
    margin-left: 1.5em;
  }

  @media screen and (max-width: ${device.md}) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
    align-items: center;
    position: absolute;
    top: 150px;

    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: var(--clr-dark);
    box-shadow: var(--shadow-bottom);
    border-radius: var(--br);
    border-top: 1px solid var(--txt-dark-secondary);
    padding: 1em 2em 2em;

    & > * + * {
      margin-left: 0;
      margin-top: 15px;
    }
  }
`

const GetQuote = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-accent-darker);
    color: var(--txt-light);
  }
`

const DropdownAbout = styled.li`
  /* hover display only on desktop */

  @media screen and (min-width: ${device.md}) {
    div {
      display: ${({ dropdownAbout }) => (dropdownAbout ? "flex" : "none")};
      position: absolute;
      top: 155px;
      left: 0;
      width: 100%;
      z-index: 1000;
      opacity: 1;
    }
    ul {
      width: 100%;
      margin: 0;
      padding: 2em 2em 2em 4em;
      list-style-type: none;
      background: var(--clr-light);

      li {
        a {
          color: var(--txt-dark);
        }
      }
    }
  }
`
const DropdownServices = styled.li`
  /* hover display only on desktop */

  @media screen and (min-width: ${device.md}) {
    div {
      display: ${({ dropdownServices }) =>
        dropdownServices ? "flex" : "none"};
      position: absolute;
      top: 155px;
      left: 0;
      width: 100%;
      z-index: 1000;
      opacity: 1;
    }
    ul {
      width: 100%;
      margin: 0;
      padding: 2em 2em 2em 4em;
      list-style-type: none;
      background: var(--clr-light);

      li {
        a {
          color: var(--txt-dark);
        }
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-light);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
    color: var(--clr-accent);
  }

  @media screen and (max-width: ${device.md}) {
    font-size: var(--fs-b);
  }
`

const Burger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--clr-accent);

    :nth-child(1) {
      transform: ${({ nav }) =>
        nav ? "rotate(-45deg) translate(-6px, 5px)" : ""};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "")};
    }
    :nth-child(3) {
      transform: ${({ nav }) =>
        nav ? "rotate(45deg) translate(-6px, -5px)" : ""};
    }
  }

  @media screen and (max-width: ${device.md}) {
    transform: scale(1);
    display: block;
    z-index: 10000;
  }
`

export default function HeaderBasic() {
  const data = useMenuQuery()

  const [nav, navOpen] = useState(false)
  const [dropdownAbout, dropdownOpenAbout] = useState(false)
  const [dropdownServices, dropdownOpenServices] = useState(false)
  const [scrolled, setScrolled] = useState(true)

  function toggleMenu() {
    navOpen(!nav)
  }

  function toggleDropdownAbout() {
    dropdownOpenAbout(!dropdownAbout)
  }
  function toggleDropdownServices() {
    dropdownOpenServices(!dropdownServices)
  }

  return (
    <div>
      <Header>
        <Headertop>
          <Container>
            <ul>
              <li>
                <NavLinkTop href="tel: 902-957-6084">
                  <div>
                    <FaPhone />
                  </div>
                  902-957-6084
                </NavLinkTop>
              </li>
              <li>
                <NavLinkTop href="mailto: info@scootnow.ca">
                  <div>
                    <MdOutlineEmail />
                  </div>
                  info@scootnow.ca
                </NavLinkTop>
              </li>
              <li>
                <NavLinkTop href="#" target="_blank">
                  <div>
                    <MdLocationOn />
                  </div>
                  Truro, NS
                </NavLinkTop>
              </li>
            </ul>
          </Container>
        </Headertop>
        <Headerbottom>
          <Container className="container">
            <LogoContainer>
              <Link to="/">
                <img src={Logo} alt="scoot now logo" />
              </Link>
            </LogoContainer>
            <Nav>
              <Burger nav={nav} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </Burger>
              <NavList nav={nav}>
                <li>
                  <StyledLink to="/about">about</StyledLink>
                </li>
                <li>
                  <StyledLink to="/how-it-works">how it works</StyledLink>
                </li>
                <li>
                  <StyledLink to="/faq">faq</StyledLink>
                </li>
                <li>
                  <StyledLink to="/blog">blog</StyledLink>
                </li>

                <li>
                  <StyledLink to="/contact">contact</StyledLink>
                </li>
                <li>
                  <GetQuote
                    href="https://apps.apple.com/app/id1466963267"
                    target="_blank"
                  >
                    download app
                  </GetQuote>
                </li>
              </NavList>
            </Nav>
          </Container>
        </Headerbottom>
      </Header>
    </div>
  )
}
