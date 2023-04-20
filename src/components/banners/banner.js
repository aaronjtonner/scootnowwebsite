import React from "react"
import styled from "styled-components"
import { Container, HeroBannerPadding } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

const Wrapper = styled.div`
  background: ${props => `url(${props.img})`}, rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 80vh;
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

export default function Banner(props) {
  return (
    <div>
      <HeroBannerPadding />
      <Wrapper img={props.img}>
        <Container className="spacing">
          <Text className="spacing">
            <div className="">
              <h1 className="title">{props.title}</h1>
            </div>
            <p className="">{props.subheader}</p>
          </Text>
        </Container>
      </Wrapper>
    </div>
  )
}
