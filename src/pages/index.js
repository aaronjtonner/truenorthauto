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

export default function Index() {
  return (
    <Layout>
      <HeroBasic />
      <Delivery />
      <SingleTestimonial />
      <Solutions />
      <Why />
      <Process />
      <Inventory />
      <FullTestimonials />
      <Cta />
    </Layout>
  )
}
