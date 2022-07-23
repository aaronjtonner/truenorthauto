import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Container, Section, GridAuto } from "./layoutComponents"
import SingleTestimonial from "./testimonials/singleTestimonial"

export default function CustomerBanner1() {
  return (
    <Section>
      <Container className="spacing">
        <h1 className="center title accent italics">
          bad credit car loans canada - we'll get you approved!
        </h1>
        <GridAuto>
          <div>
            <StaticImage
              src="../images/canada-truck-loan-customer-1.jpg"
              alt="canada truck auto loan"
            />
            <SingleTestimonial
              review="Very happy with our new truck. Was easy to get approved and the truck we wanted. Thank you True North Auto Loans!"
              name="Aaron Tonner"
              location="Calgary, AB"
            />
          </div>
          <div>
            <StaticImage
              src="../images/canada-truck-loan-customer-2.jpg"
              alt="truck auto loan canada"
            />
            <SingleTestimonial
              review="True North went above and beyond to get through all the obstacles I’ve had getting financing, getting my truck insured and registered and delivering it to my home. Thank you!!"
              name="Aaron Tonner"
              location="Calgary, AB"
            />
          </div>
          <div>
            <StaticImage
              src="../images/affordable-auto-loan-customer-3.jpg"
              alt="affordable auto loan in canada"
            />
            <SingleTestimonial
              review="We had a great experience with True North Auto Loans. They got us the financing we needed with affordable payments. We love our new blue Chevy. Also came full of groceries. Thanks guys!!"
              name="Aaron Tonner"
              location="Calgary, AB"
            />
          </div>
        </GridAuto>
      </Container>
    </Section>
  )
}
