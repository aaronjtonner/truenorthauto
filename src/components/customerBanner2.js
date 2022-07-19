import React, { Component } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Section, GridAuto } from "./layoutComponents"
import SingleTestimonial from "./testimonials/singleTestimonial"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Item = styled.div``

export default function CustomerBanner2() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <Section>
      <Container className="spacing">
        <div className="center">
          <h2 className="title bold italics">
            We’ve been able to help 200+ customers in northern canada{" "}
          </h2>
          <p className="accent upper">financing solutions for everyone</p>
        </div>
        <GridAuto>
          <Item>
            <StaticImage
              src="../images/jeep-suv-loan.jpg"
              alt="jeep suv loan canada"
            />
            <SingleTestimonial
              review="Big thanks to True North Auto Loans for getting us a Jeep SUV!"
              name="Aaron Tonner"
              location="Calgary, AB"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/truck-auto-loan-canada-customer-4.jpg"
              alt="jeep suv loan"
            />
            <SingleTestimonial
              review="Thanks to True North for getting me a pickup for work. Will recommend them to my friends and family."
              name="Aaron Tonner"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/auto-loan-canada-customer-5.jpg"
              alt="auto loan canada"
            />
            <SingleTestimonial
              review="Thank you to True North Auto Loans! I’m loving the new truck. I’ll be coming back to you guys in the future!"
              name="Aaron Tonner"
            />
          </Item>
          <Item>
            <StaticImage
              src="../images/auto-loan-canada-customer-6.jpg"
              alt="canadian auto loan trade-in"
            />
            <SingleTestimonial
              review="Great service. Traded my half ton for a diesel thanks to True North!"
              name="Aaron Tonner"
            />
          </Item>
        </GridAuto>
      </Container>
    </Section>
  )
}
