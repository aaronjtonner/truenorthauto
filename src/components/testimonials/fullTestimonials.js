import React from "react"
import styled from "styled-components"
import { Container, GridTwo, Section } from "../layoutComponents"

const Testimonial = styled.div`
  background: rgba(253, 0, 0, 0.2);
  border-radius: var(--br);
  padding: 4em;

  p {
    text-align: center;
  }
`

export default function FullTestimonials() {
  return (
    <Section>
      <Container className="spacing">
        <div className="center">
          <h2 className="title bold italics">
            We’ve been able to help 200+ customers in northern canada{" "}
          </h2>
          <p className="accent upper">financing solutions for everyone</p>
        </div>
        <GridTwo>
          <Testimonial>
            <p className="italics bold">
              "A testimonial that includes how True North Auto went above and
              beyond by supplying free groceries on a delivery. They truly care
              about their customers"
            </p>
            <p className="body--small">- Aaron Tonner | Calgary, AB</p>
          </Testimonial>
          <Testimonial>
            <p className="italics bold">
              "A testimonial that includes how True North Auto went above and
              beyond by supplying free groceries on a delivery. They truly care
              about their customers"
            </p>
            <p className="body--small">- Aaron Tonner | Calgary, AB</p>
          </Testimonial>
          <Testimonial>
            <p className="italics bold">
              "A testimonial that includes how True North Auto went above and
              beyond by supplying free groceries on a delivery. They truly care
              about their customers"
            </p>
            <p className="body--small">- Aaron Tonner | Calgary, AB</p>
          </Testimonial>
          <Testimonial>
            <p className="italics bold">
              "teA testimonial that includes how True North Auto went above and
              beyond by supplying free groceries on a delivery. They truly care
              about their customerssti"
            </p>
            <p className="body--small">- Aaron Tonner | Calgary, AB</p>
          </Testimonial>
        </GridTwo>
      </Container>
    </Section>
  )
}
