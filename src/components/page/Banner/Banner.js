import React from "react"
import styled from "styled-components"
import { Container, Actions, HeroBannerPadding } from "../../layoutComponents"
import { ButtonPrimary, AnchorInline, AnchorPrimary } from "../../buttons"
import Breadcrumb from "../../Breadcrumb/Breadcrumb"
import { StaticImage } from "gatsby-plugin-image"

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  background: ${props => `url(${props.img})`}, rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 60vh;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const Text = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
export default function Banner({ title, subheader, description, image }) {
  return (
    <div>
      <HeroBannerPadding />
      <Wrapper img={image.localFile.childImageSharp.fluid.src}>
        <Container className="spacing">
          <Text className="spacing">
            <div className="">
              <h1 className="title">{title}</h1>
              <p className="">{subheader}</p>
            </div>
            <AnchorPrimary
              href="https://apps.apple.com/app/id1466963267"
              target="_blank"
            >
              download the app
            </AnchorPrimary>
          </Text>
        </Container>
      </Wrapper>
    </div>
  )
}
