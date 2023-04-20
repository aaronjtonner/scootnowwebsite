import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section, FlexMobileOpp } from "../../layoutComponents"
import {
  ButtonPrimary,
  ButtonSecondaryLight,
  AnchorPrimary,
} from "../../buttons"

const Wrapper = styled.div`
  background: var(--clr-dark);
`

const Text = styled.div`
  color: var(--txt-light);
`

const StyledImg = styled(GatsbyImage)`
  box-shadow: -20px 20px 0px 1px var(--clr-secondary);
  min-height: 450px;
  align-self: stretch;
`

export default function ImageLeftDark({ subheader, title, body, image }) {
  return (
    <Wrapper>
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
              <AnchorPrimary
                href="https://apps.apple.com/app/id1466963267"
                target="_blank"
              >
                download the app
              </AnchorPrimary>
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
