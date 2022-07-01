import React from "react"
import Delivery from "../components/delivery"
import HeroBasic from "../components/heros/hero"
import Layout from "../components/layout"
import SingleTestimonial from "../components/testimonials/singleTestimonial"

export default function Index() {
  return (
    <Layout>
      <HeroBasic />
      <Delivery />
      <SingleTestimonial />
    </Layout>
  )
}
