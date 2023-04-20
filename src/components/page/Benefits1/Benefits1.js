import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../../buttons"
import { Container, GridThree, Section } from "../../layoutComponents"

const Text = styled.div`
  h2 {
    color: var(--txt-dark);
  }
`

const StyledImg = styled(GatsbyImage)`
  max-height: 100px;
  max-width: 100px;
`

const BenefitItem = styled.div`
  border: 2px solid var(--clr-tan);
  padding: 2em;
  border-radius: var(--br);
`

export default function Benefits1({ subheader, title, benefitContent }) {
  return (
    <Section>
      <Container className="spacing-md">
        <Text className="center">
          <p className="subheader">{subheader}</p>
          <h2 className="title">{title}</h2>
        </Text>
        <GridThree>
          {benefitContent.map(benefit => {
            return (
              <BenefitItem className="spacing center">
                <StyledImg
                  image={
                    benefit.image.localFile.childImageSharp.gatsbyImageData
                  }
                  alt={benefit.image.altText}
                />
                <h3 className="subheader caps tan">{benefit.title}</h3>
                {benefit.description ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${benefit.description}`,
                    }}
                  />
                ) : null}
              </BenefitItem>
            )
          })}
        </GridThree>
      </Container>
    </Section>
  )
}
