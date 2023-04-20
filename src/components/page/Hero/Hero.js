import React from "react"
import styled from "styled-components"
import { Container } from "../../layoutComponents"
import { ButtonPrimary, AnchorPrimary } from "../../buttons"
import { HeroBannerPadding } from "../../layoutComponents"

const HeroWrapper = styled.div`
  background: ${props => `url(${props.img})`}, rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 85vh;
  height: 100%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const Text = styled.div`
  color: var(--txt-light);
  max-width: 90ch;
  width: 100%;
`

export default function Hero({ subheader, title, description, image }) {
  return (
    <>
      <HeroBannerPadding />
      <HeroWrapper img={image.localFile.childImageSharp.fluid.src}>
        <Container>
          <Text className="spacing-md">
            <div className="spacing">
              {subheader ? (
                <p className="subheader italics">{subheader}</p>
              ) : null}
              <h2 className="title">{title}</h2>
            </div>
            {description ? <p>{description}</p> : null}
            <AnchorPrimary
              href="https://apps.apple.com/app/id1466963267"
              target="_blank"
            >
              download the app
            </AnchorPrimary>
          </Text>
        </Container>
      </HeroWrapper>
    </>
  )
}
