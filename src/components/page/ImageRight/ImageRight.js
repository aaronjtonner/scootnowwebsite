import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section, Flex } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"
import Download from "../../download"

const Text = styled.div``

const StyledImg = styled(GatsbyImage)`
  box-shadow: 20px 20px 0px 1px var(--clr-secondary);
  min-height: 450px;
  align-self: stretch;
`

export default function ImageRight({ subheader, title, body, image }) {
  return (
    <Section>
      <Container>
        <Flex>
          <Text className="spacing">
            <div>
              <p className="subheader">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            {body ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              ></div>
            ) : null}

            <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
            <Download />
          </Text>
          <StyledImg
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.altText}
            className="stretch"
          />
        </Flex>
      </Container>
    </Section>
  )
}
