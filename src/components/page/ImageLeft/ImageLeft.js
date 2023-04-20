import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section, FlexMobileOpp, Flex } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"

const Text = styled.div``

const StyledImg = styled(GatsbyImage)`
  box-shadow: -20px 20px 0px 1px var(--clr-secondary);
  min-height: 450px;
  align-self: stretch;
`

export default function ImageLeft({ subheader, title, body, image }) {
  return (
    <Section>
      <Container>
        <FlexMobileOpp>
          <StyledImg
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.altText}
            className="stretch"
          />
          <Text className="spacing">
            <div>
              <p className="subheader">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${body}`,
              }}
            ></div>
            <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
            <Flex>
              <a href="https://apps.apple.com/app/id1466963267" target="_blank">
                <StaticImage src="../../../images/apple-badge.png" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=levy.app"
                target="_blank"
              >
                <StaticImage src="../../../images/google-play-badge.png" />
              </a>
            </Flex>
          </Text>
        </FlexMobileOpp>
      </Container>
    </Section>
  )
}
