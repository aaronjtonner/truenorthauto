import React from "react"
import styled from "styled-components"
import { Container, Section, Flex } from "../components/layoutComponents"
import { Label, Input, TextArea, Submit } from "../components/forms/formItems"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Wrapper = styled.div``

const Part = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function GetALoan() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <form
            name="contact"
            className="spacing-lg"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <Part id="part1">
              <div>
                <h3 className="title--bold center accent caps">
                  preferred vehicle
                </h3>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <input
                    type="radio"
                    name="vehicleChoice"
                    id="car"
                    value="car"
                    checked
                  />
                  <label for="car">car</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="vehicleChoice"
                    id="truck"
                    value="truck"
                  />
                  <label for="truck">truck</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="vehicleChoice"
                    id="suv"
                    value="suv"
                  />
                  <label for="suv">suv</label>
                </div>
                <AnchorLink to="/get-a-loan#part2" title="continue" />
              </div>
            </Part>
            <Part id="part2">
              <div>
                <h3 className="title--bold center accent caps">
                  employment status
                </h3>
                <div>
                  <input
                    type="radio"
                    name="employmentStatus"
                    id="full-time"
                    value="full time"
                  />
                  <label for="full-time">full-time</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="employmentStatus"
                    id="full-time"
                    value="full time"
                  />
                  <label for="full-time">full-time</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="employmentStatus"
                    id="full-time"
                    value="full time"
                  />
                  <label for="full-time">full-time</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="employmentStatus"
                    id="full-time"
                    value="full time"
                  />
                  <label for="full-time">full-time</label>
                </div>
              </div>
            </Part>
          </form>
        </Container>
      </Section>
    </Wrapper>
  )
}
