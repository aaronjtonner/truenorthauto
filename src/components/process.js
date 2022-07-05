import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "./buttons"
import { Container, GridThree, Section } from "./layoutComponents"

const Item = styled.div``

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const Number = styled.p`
  color: var(--clr-accent);
  opacity: 0.5;
  font-size: 150px;
  font-weight: var(--fw-900);
`

export default function Process() {
  return (
    <Section>
      <Container className="spacing">
        <h2 className="title bold caps">our process is easy as 1-2-3!</h2>
        <GridThree>
          <Item>
            <Flex>
              <Number>1</Number>
              <div className="spacing-sm">
                <h3 className="bold">See how much you qualify for</h3>
                <p>
                  Stop guessing what your payments will be. Our partners have
                  financing options for any credit situation.
                </p>
              </div>
            </Flex>
          </Item>
          <Item>
            <Flex>
              <Number>2</Number>
              <div className="spacing-sm">
                <h3 className="bold">See vehicle options in your budget</h3>
                <p>
                  Save time and only see the actual vehicles you are
                  pre-approved for. No more rejection.
                </p>
              </div>
            </Flex>
          </Item>
          <Item>
            <Flex>
              <Number>3</Number>
              <div className="spacing-sm">
                <h3 className="bold">Pick a car and drive away</h3>
                <p>
                  Once you're happy with your vehicle choice and the payments
                  are affordable, you could be driving it away within 48 hours!
                </p>
              </div>
            </Flex>
          </Item>
        </GridThree>
        <ButtonPrimary to="">see what you qualify for &#x2192;</ButtonPrimary>
      </Container>
    </Section>
  )
}