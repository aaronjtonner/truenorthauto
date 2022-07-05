import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Section } from "../layoutComponents"

const Wrapper = styled.div`
  background: rgba(253, 0, 0, 0.2);

  .av-img {
    border-radius: 1000px;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function SingleTestimonial() {
  return (
    <Wrapper>
      <Section>
        <Flex>
          <StaticImage
            className="av-img"
            src="../../images/ph.jpg"
            width={150}
            height={150}
          />
          <div className="center">
            <p className="italics">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
              maxime! A, fugit minima adipisci obcaecati earum exercitationem
              necessitatibus quo maiores!"
            </p>
            <p className="body--small">Aaron Tonner | Calgary, AB</p>
          </div>
        </Flex>
      </Section>
    </Wrapper>
  )
}
