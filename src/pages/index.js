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
import SEO from "../components/seo"

export default function Index() {
  return (
    <Layout>
      <SEO
        title="Auto Loans North Canada: Financing solutions for everyone!"
        description="Dedicated to finding you the best auto loan in Canada for the vehicle you want. Whatever your credit rating, True North Auto Loans is here to help!"
      />
      <HeroBasic />
      <CustomerBanner1 />
      <div id="how"></div>
      <Delivery />
      <Solutions />
      <Why />
      <div id="process"></div>
      <Process />
      <div id="inventory"></div>
      <Inventory />
      <div id="testimonials"></div>
      <CustomerBanner2 />
      <Cta />
    </Layout>
  )
}
