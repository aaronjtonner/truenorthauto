import React from "react"
import styled from "styled-components"
import QuickApproval from "./forms/quickApproval"
import { Container, FlexMobileOpp, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: url("../../images/hero.jpg"), rgba(253, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    color: var(--txt-light);
  }
`

const Item = styled.div`
  color: var(--txt-light);
`

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.8);
`
const Div = styled.div`
  align-self: center;
`

export default function Cta() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <h2 className="center title italics bold caps">
            are you ready to get your loan?
          </h2>
          <FlexMobileOpp>
            <Div className="spacing-lg">
              <Item className="spacing">
                <h3 className="bold upper italics heading">
                  pick your ride, customize your loan, delivered to your
                  doorstep
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  maxime rerum earum quod nulla, soluta unde dolore velit odio
                  totam vitae ducimus excepturi voluptate voluptatem error sunt
                  ipsum ex tenetur!
                </p>
              </Item>
              <Item className="spacing">
                <h3 className="bold upper italics heading">
                  we provide free groceries with every delivery
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  maxime rerum earum quod nulla, soluta unde dolore velit odio
                  totam vitae ducimus excepturi voluptate voluptatem error sunt
                  ipsum ex tenetur!
                </p>
              </Item>
              <Item className="spacing">
                <h3 className="bold upper italics heading">
                  financing solutions for any credit situation
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  maxime rerum earum quod nulla, soluta unde dolore velit odio
                  totam vitae ducimus excepturi voluptate voluptatem error sunt
                  ipsum ex tenetur!
                </p>
              </Item>
            </Div>
            <FormWrapper>
              <QuickApproval />
            </FormWrapper>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
