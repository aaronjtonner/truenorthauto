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
import CustomerBanner1 from "../components/customerBanner1"
import CustomerBanner2 from "../components/customerBanner2"

export default function Index() {
  return (
    <Layout>
      <HeroBasic />
      <CustomerBanner1 />
      <Delivery />
      <Solutions />
      <Why />
      <Process />
      <Inventory />
      <CustomerBanner2 />
      <Cta />
    </Layout>
  )
}
