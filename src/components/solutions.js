import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "./buttons"
import { Section, Container, GridAuto } from "./layoutComponents"

const Item = styled.div`
  div {
    padding: 2em;
    box-shadow: var(--shadow-light-accent);
    border-radius: var(--br);
  }
`

export default function Solutions() {
  return (
    <Section>
      <Container className="spacing">
        <div className="center">
          <h2 className="title bold italics caps">
            financing solutions available for everyone
          </h2>
          <p className="accent upper">
            worried about your credit history? We’ve got your back
          </p>
        </div>
        <GridAuto>
          <Item>
            <StaticImage src="../images/ph.jpg" alt="" />
            <div className="spacing">
              <h3 className="bold caps">Bad or Damaged Credit</h3>
              <p>
                Whether it’s a consumer proposal or bankruptcy, we advise you on
                solutions that will improve your credit while getting you a car
                loan. We also have programs offered to those who have had a
                repossession in the past. Our mission is to get you driving!
              </p>
            </div>
          </Item>
          <Item>
            <StaticImage src="../images/ph.jpg" alt="" />
            <div className="spacing">
              <h3 className="bold caps">High Interest Loan Relief</h3>
              <p>
                Are you in a high interest loan? We find refinancing options
                available to you which can get you out of high interest car
                loans.{" "}
              </p>
            </div>
          </Item>
          <Item>
            <StaticImage src="../images/ph.jpg" alt="" />
            <div className="spacing">
              <h3 className="bold caps">Negative Equity?</h3>
              <p>
                We make sure you get the highest value for your trade-in.
                Through our dealer network, we find the highest bidder on your
                vehicle so you know you’re getting what your vehicle is worth.{" "}
              </p>
            </div>
          </Item>
          <Item>
            <StaticImage src="../images/ph.jpg" alt="" />
            <div className="spacing">
              <h3 className="bold caps">Downsizing</h3>
              <p>
                If you’re looking to lower the cost of driving - we have
                solutions. We’ll find creative ways to lower your payment. Or if
                you’re looking for a smaller vehicle because your kids moved out
                - let us find you the right ride for your situation now!
              </p>
            </div>
          </Item>
        </GridAuto>
        <div className="center">
          <ButtonPrimary to="">get a loan now</ButtonPrimary>
        </div>
      </Container>
    </Section>
  )
}
