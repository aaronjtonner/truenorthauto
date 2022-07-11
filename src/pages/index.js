import React from "react"
import Cta from "../components/cta"
import Delivery from "../components/delivery"
import HeroBasic from "../components/heros/hero"
import Inventory from "../components/inventory"
import Layout from "../components/layout"
import Process from "../components/process"
import Solutions from "../components/solutions"
import FullTestimonials from "../components/testimonials/fullTestimonials"
import SingleTestimonial from "../components/testimonials/singleTestimonial"
import Why from "../components/why"
import { Section, Container } from "../components/layoutComponents"
import KwesForm from "../components/forms/kwesForm"

export default function Index() {
  return (
    <Layout>
      <HeroBasic />
      <Delivery />
      <Section>
        <Container>
          <SingleTestimonial
            name="first last"
            date="date"
            review="sample review"
          />
        </Container>
      </Section>
      <Solutions />
      <Why />
      <Process />
      <Inventory />
      <FullTestimonials />
      <Cta />
      <KwesForm />
    </Layout>
  )
}
