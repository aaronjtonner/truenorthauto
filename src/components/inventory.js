import React from "react"
import { Container, Section } from "./layoutComponents"

export default function Inventory() {
  return (
    <Section>
      <Container>
        <h2 className="title bold caps center">
          we are <span className="italics underline accent">always</span> in
          stock!
        </h2>
      </Container>
    </Section>
  )
}
