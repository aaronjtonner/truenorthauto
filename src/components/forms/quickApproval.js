import React from "react"
import styled from "styled-components"

import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import Map from "../map"

export default function QuickApproval() {
  return (
    <Section>
      <Container>
        <h3 className="title--bold center">
          <span className="italics accent">get a quick approval</span>
        </h3>
        <div>
          <form
            name="quick-approval"
            className="spacing"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <Flex>
              <div className="spacing-sm">
                <Label htmlFor="fname">* First Name:</Label>
                <Input
                  type="name"
                  name="fname"
                  id="fname"
                  placeholder="John"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="lname">* Last Name:</Label>
                <Input
                  type="name"
                  name="lname"
                  id="lname"
                  placeholder="Doe"
                  required
                />
              </div>
            </Flex>
            <Flex>
              <div className="spacing-sm">
                <Label htmlFor="name">* Email:</Label>
                <Input
                  type="mail"
                  name="mail"
                  id="mail"
                  placeholder="john@email.com"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="email">* Phone:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="000-000-0000"
                  required
                />
              </div>
            </Flex>
            <div className="spacing-sm">
              <Label htmlFor="phone">* Preferred Contact Method:</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="spacing-sm">
              <Label htmlFor="subject">Preferred Time of Day:</Label>
              <Input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <Submit type="submit" id="submit" value="get approved now" />
          </form>
        </div>
      </Container>
    </Section>
  )
}
