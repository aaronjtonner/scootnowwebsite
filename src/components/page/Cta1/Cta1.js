import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { AnchorSecondary, ButtonPrimaryDark } from "../../buttons"
import { Container, Flex, Section } from "../../layoutComponents"
import Download from "../../download"

const Wrapper = styled.div`
  background: var(--clr-accent);
`

const Text = styled.div`
  color: var(--txt-light);
  padding: 2em 0;

  .subheader {
    color: var(--txt-dark-secondary);
  }
`

const StyledImg = styled(GatsbyImage)`
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 52%, 0% 0%);
`

export default function Cta1({ subheader, title, body, image }) {
  return (
    <Wrapper>
      <Flex>
        <StyledImg
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.altText}
          className="stretch"
        />
        <Text>
          <Container className="spacing">
            <div>
              <p className="subheader">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            {body ? (
              <p
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              />
            ) : null}

            <AnchorSecondary
              href="https://apps.apple.com/app/id1466963267"
              target="_blank"
            >
              download the app &#8594;
            </AnchorSecondary>
            <Download />
          </Container>
        </Text>
      </Flex>
    </Wrapper>
  )
}
