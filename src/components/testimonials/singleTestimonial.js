import React from "react"
import styled from "styled-components"
import { Section } from "../layoutComponents"

const Wrapper = styled.div``

export default function SingleTestimonial() {
  return (
    <Wrapper>
      <Section>
        <div className="center">
          <p className="italics">
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
            maxime! A, fugit minima adipisci obcaecati earum exercitationem
            necessitatibus quo maiores!"
          </p>
          <p className="body--small">Aaron Tonner | Calgary, AB</p>
        </div>
      </Section>
    </Wrapper>
  )
}
