import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section, GridAuto } from "./layoutComponents"
import SingleTestimonial from "./testimonials/singleTestimonial"

export default function CustomerBanner2() {
  return (
    <Section>
      <Container>
        <GridAuto>
          <div>
            <StaticImage
              src="../images/jeep-suv-loan.jpg"
              alt="jeep suv loan canada"
            />
            <SingleTestimonial
              review="Big thanks to True North Auto Loans for getting us a Jeep SUV!"
              name="Aaron Tonner"
              location="Calgary, AB"
            />
          </div>
          <div>
            <StaticImage
              src="../images/truck-auto-loan-canada-customer-4.jpg"
              alt="jeep suv loan"
            />
            <SingleTestimonial
              review="Thanks to True North for getting me a pickup for work. Will recommend them to my friends and family."
              name="Aaron Tonner"
            />
          </div>
          <div>
            <StaticImage
              src="../images/auto-loan-canada-customer-5.jpg"
              alt="auto loan canada"
            />
            <SingleTestimonial
              review="Thank you to True North Auto Loans! I’m loving the new truck. I’ll be coming back to you guys in the future!"
              name="Aaron Tonner"
            />
          </div>
          <div>
            <StaticImage
              src="../images/auto-loan-canada-customer-6.jpg"
              alt="canadian auto loan trade-in"
            />
            <SingleTestimonial
              review="Great service. Traded my half ton for a diesel thanks to True North!"
              name="Aaron Tonner"
            />
          </div>
        </GridAuto>
      </Container>
    </Section>
  )
}
