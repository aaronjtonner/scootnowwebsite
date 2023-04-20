import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../layoutComponents"
import Facebook from "../../images/socials/facebook.svg"
import Instagram from "../../images/socials/instagram.svg"
import Youtube from "../../images/socials/youtube.svg"
import { FaPhone, FaRegClock } from "react-icons/fa"
import { MdLocationOn, MdOutlineEmail } from "react-icons/md"
import FormFooter from "../forms/formFooter"
import { Info } from "../info"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import Map from "../map"
import Download from "../download"

const device = {
  md: "48em",
  lg: "57em",
}

const IconStyle = {
  color: "var(--clr-accent)",
}

const Flex = styled.div`
  display: flex;
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer-lg);
    }
  }
`

const Wrapper = styled.footer``

const FooterWrapperTop = styled.div`
  padding: 4em 0 3rem 0;
  background: var(--clr-dark);

  h4 {
    color: var(--clr-secondary);
  }

  ul {
    list-style-type: none;
  }
`

const FooterWrapperBottom = styled.div`
  padding: 4em 0 1em 0;
  background: var(--clr-accent);

  h4 {
    color: var(--txt-light);
  }

  ul {
    list-style-type: none;
  }
`

const Socials = styled.div`
  display: flex;

  & > * + * {
    margin-left: 15px;
  }

  div {
    display: flex;

    & > * + * {
      margin-left: 10px;
    }
  }

  img {
    width: 25px;
  }
`

const Divider = styled.div`
  width: 1px;
  height: 100px;
  background-color: var(--txt-light);

  @media screen and (max-width: ${device.md}) {
    display: none;
  }
`

const ContactLink = styled.a`
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

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--txt-light);

  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 1em;

      @media screen and (max-width: ${device.md}) {
        margin-left: 0;
      }
    }

    li {
      a {
        text-transform: capitalize;
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`

const PageLinks = styled.div`
  color: var(--clr-secondary);

  ul {
    padding-left: 0;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-light);
  font-weight: var(--fw-400);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
    color: var(--clr-accent);
  }
`

const Author = styled.div`
  color: var(--txt-light-secondary);

  div {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    text-align: right;
  }

  a {
    display: inline;
    color: var(--txt-light-secondary);
  }

  .img {
    width: 80px;
  }
`

const FlexNormal = styled.div`
  display: flex;
`

export default function Footer() {
  const data = useMenuQuery()
  return (
    <Wrapper>
      <FooterWrapperTop>
        <Container className="spacing-lg">
          <Flex>
            <Flex>
              <div className="spacing">
                <StaticImage
                  width={200}
                  src="../../images/scoot-now-logo-white.svg"
                  alt="scoot now logo"
                />

                {/* <Map /> */}
              </div>
              <Divider />
            </Flex>
            <Flex>
              <div className="spacing-lg">
                <div className="spacing">
                  <h4 className="subheader">contact us</h4>
                  <ul>
                    <li>
                      <ContactLink href="tel: 902-957-6084">
                        <div>
                          <FaPhone style={IconStyle} />
                        </div>
                        902-957-6084
                      </ContactLink>
                    </li>
                    <li>
                      <ContactLink href="mailto: info@scootnow.ca">
                        <div>
                          <MdOutlineEmail style={IconStyle} />
                        </div>
                        info@scootnow.ca
                      </ContactLink>
                    </li>
                    <li>
                      <ContactLink href="#" target="_blank">
                        <div>
                          <MdLocationOn style={IconStyle} />
                        </div>
                        Truro, NS
                      </ContactLink>
                    </li>
                  </ul>
                </div>
                <Socials>
                  <h4 className="subheader">let's connect!</h4>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/levyelectricscooters"
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/levyelectric/"
                    >
                      <img src={Instagram} alt="" />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UCGUcfeh9oF_Ckj48MR5PqLw/videos"
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </div>
                </Socials>
                <Download />
                <PageLinks>
                  <h3 className="subheader">quick links</h3>
                  <ul>
                    <li>
                      <StyledLink to="/">home</StyledLink>
                    </li>
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
                  </ul>
                </PageLinks>
              </div>
              <Divider />
            </Flex>
            <div>
              <h4 className="subheader">email us</h4>
              <FormFooter />
            </div>
          </Flex>
          <hr />
          <Copyright>
            <ul>
              <li>Copyright&#169; 2023</li>
              <li>Scoot Now E-Rentals Inc.</li>
              <li>All Rights Reserved</li>
              <li>
                <a target="blank" href="">
                  Terms of use
                </a>
              </li>
              <li>
                <a target="blank" href="">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Copyright>
          <Author>
            <Container>
              <div className="center">
                <p>website by: </p>
                <a target="_blank" href="https://www.vandymarketing.com">
                  Vandy Marketing
                </a>
              </div>
            </Container>
          </Author>
        </Container>
      </FooterWrapperTop>
    </Wrapper>
  )
}
