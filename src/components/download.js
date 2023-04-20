import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Flex = styled.div`
  display: flex;

  a {
    .badge-img {
    }
  }
`

export default function Download() {
  return (
    <Flex>
      <a href="https://apps.apple.com/app/id1466963267" target="_blank">
        <StaticImage
          className="badge-img"
          src="../images/apple-badge-small.png"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=levy.app"
        target="_blank"
      >
        <StaticImage
          className="badge-img"
          src="../images/google-play-badge-small-1.png"
        />
      </a>
    </Flex>
  )
}
