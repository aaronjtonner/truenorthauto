import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Container, Section } from "../components/layoutComponents"
import {
  Label,
  Input,
  TextArea,
  Submit,
  LabelInline,
  InputInline,
  Select,
} from "../components/forms/formItems"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"

const device = {
  md: "48em",
}

const Wrapper = styled.div``

const PartTitle = styled.h2``

const QuestionTitle = styled.h3`
  font-size: var(--fs-3);
  text-transform: capitalize;
  color: var(--clr-accent);
  margin-bottom: var(--spacer);
`

const Part = styled.div`
  height: 100vh;
  // display: flex;
  // align-items: center;

  // div {
  //   flex-shrink: 0;
  //   flex-grow: 1;
  // }
`

const QuestionArea = styled.div`
  background: var(--clr-light-secondary);
  padding: 2em;
  border-radius: var(--br);
`

const Flex = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const ItemFlex = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 2px;
  }
`

const BirthdayFlex = styled.div`
  > * + * {
    margin-left: 2px;
  }
`

const VehicleChoice = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 10px;
  }

  div {
    width: 150px;
    height: 150px;
    label {
      display: flex;
      flex-direction: column;

      .label-img {
        border: 1px solid var(--txt-dark-secondary);

        &:hover {
          transform: scale(1.01);
          transition: all 0.3s;
        }

        &:active {
          border: 1px solid var(--clr-accent);
        }
      }
    }
  }
`
export default function GetALoan() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <form
            name="contact"
            className="spacing-lg"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <Part id="part1">
              <div>
                <PartTitle>title</PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle className="center">
                    what vehicle do you want?
                  </QuestionTitle>
                  <VehicleChoice>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <div className="spacing-sm">
                      <Label for="car">
                        <StaticImage
                          src="../images/inventory/sedans.jpg"
                          alt="car"
                          className="label-img"
                        />
                        car
                      </Label>
                      <input
                        type="radio"
                        name="vehicleChoice"
                        id="car"
                        value="car"
                      />
                    </div>
                    <div className="spacing-sm">
                      <Label for="suv">
                        <StaticImage
                          src="../images/inventory/sport-suvs.jpg"
                          alt="suv"
                          className="label-img"
                        />
                        suv
                      </Label>
                      <input
                        type="radio"
                        name="vehicleChoice"
                        id="suv"
                        value="suv"
                      />
                    </div>
                    <div className="spacing-sm">
                      <Label for="truck">
                        <StaticImage
                          src="../images/inventory/trucks.jpg"
                          alt="truck"
                          className="label-img"
                        />
                        truck
                      </Label>
                      <input
                        type="radio"
                        name="vehicleChoice"
                        id="truck"
                        value="truck"
                      />
                    </div>
                  </VehicleChoice>
                  <div>
                    <QuestionTitle>do you have a trade-in?</QuestionTitle>
                    <div className="spacing-sm">
                      <Select name="tradeIn" id="tradeIn">
                        <option value="no" selected>
                          No
                        </option>
                        <option value="yes">yes</option>
                      </Select>
                    </div>
                  </div>
                </QuestionArea>
                <AnchorLink to="/get-a-loan#part2" title="continue" />
              </div>
            </Part>
            <Part id="part2">
              <div>
                <PartTitle>title</PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>what is your monthly budget?</QuestionTitle>
                  <div className="spacing-sm">
                    <Select name="monthlyBudget" id="monthlyBudget">
                      <option value="$100 per month">$100 / month</option>
                      <option value="$100-$500 per month">
                        $100 - $500 / month
                      </option>
                      <option value="$500-$1000 per month">
                        $500 - $1000 / month
                      </option>
                      <option value="$1000+ per month">$1000+ / month</option>
                    </Select>
                  </div>
                </QuestionArea>
                <AnchorLink to="/get-a-loan#part3" title="continue" />
              </div>
            </Part>
            <Part id="part3">
              <div>
                <PartTitle>title</PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>what is your employment status?</QuestionTitle>
                  <div>
                    <div className="spacing-sm">
                      <input
                        type="radio"
                        name="employmentStatus"
                        id="full-time"
                        value="full-time"
                      />
                      <label for="full-time">Full-time</label>
                    </div>
                    <div className="spacing-sm">
                      <input
                        type="radio"
                        name="employmentStatus"
                        id="part-time"
                        value="part-time"
                      />
                      <label for="part-time">Part-time</label>
                    </div>
                    <div className="spacing-sm">
                      <input
                        type="radio"
                        name="employmentStatus"
                        id="self-employed"
                        value="self-employed"
                      />
                      <label for="self-employed">Self-employed</label>
                    </div>
                    <div className="spacing-sm">
                      <input
                        type="radio"
                        name="employmentStatus"
                        id="pension"
                        value="pension"
                      />
                      <label for="pension">Pension</label>
                    </div>
                  </div>
                  <div>
                    <QuestionTitle>what is your monthly income?</QuestionTitle>
                    <ItemFlex>
                      <p>$</p>
                      <Input
                        type="number"
                        name="monthlyIncome"
                        id="monthlyIncome"
                        datatype="currency"
                        placeholder="Monthly Income"
                      />
                    </ItemFlex>
                  </div>
                </QuestionArea>
                <AnchorLink to="/get-a-loan#part4" title="continue" />
              </div>
            </Part>
            <Part id="part4">
              <div>
                <PartTitle>title</PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>where do you work?</QuestionTitle>
                  <div>
                    <Flex>
                      <div className="spacing-sm">
                        <label for="companyName">Company name:</label> <br />
                        <Input
                          type="text"
                          name="companyName"
                          id="companyName"
                        />
                      </div>
                      <div className="spacing-sm">
                        <label for="jobTitle">Job title:</label> <br />
                        <Input type="text" name="jobTitle" id="jobTitle" />
                      </div>
                    </Flex>
                  </div>
                  <div>
                    <QuestionTitle>
                      how long have you worked here?
                    </QuestionTitle>
                    <div>
                      <Select name="lengthOfWork" id="lengthOfWork">
                        <option value="1 - 3 months">1 - 3 Months</option>
                        <option value="3 - 6 months">3 - 6 Months</option>
                        <option value="6 - 12 months">6 - 12 Months</option>
                        <option value="1+ year">1+ Year</option>
                      </Select>
                    </div>
                  </div>
                </QuestionArea>
                <AnchorLink to="/get-a-loan#part5" title="continue" />
              </div>
            </Part>
            <Part id="part5">
              <div>
                <PartTitle>title</PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>
                    do you rent or own a home / apartment?
                  </QuestionTitle>
                  <div>
                    <div className="spacing-sm">
                      <input
                        type="radio"
                        name="rentOrOwn"
                        id="rent"
                        value="rent"
                        checked
                      />
                      <label for="rent">Rent</label>
                    </div>
                    <div className="spacing-sm">
                      <input
                        type="radio"
                        name="rentOrOwn"
                        id="own"
                        value="own"
                      />
                      <label for="own">Own</label>
                    </div>
                  </div>
                  <div>
                    <QuestionTitle>what is your monthly payment?</QuestionTitle>
                    <div>
                      <ItemFlex>
                        <p>$</p>
                        <Input
                          type="number"
                          name="monthlyExpense"
                          id="monthlyExpense"
                          datatype="currency"
                          placeholder="Monthly Payment"
                        />
                      </ItemFlex>
                    </div>
                  </div>
                </QuestionArea>
                <AnchorLink to="/get-a-loan#part6" title="continue" />
              </div>
            </Part>
            <Part id="part6">
              <div>
                <PartTitle>title</PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>what is your home address?</QuestionTitle>
                  <div className="spacing">
                    <Flex>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="123 Rose St"
                        />
                        <Label for="address">address line 1</Label>
                      </div>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Calgary"
                        />
                        <Label for="city">city</Label>
                      </div>
                    </Flex>
                    <Flex>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="province"
                          id="province"
                          placeholder="AB"
                        />
                        <Label for="province">province</Label>
                      </div>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="postalCode"
                          id="postalCode"
                          placeholder="T2X 3L6"
                        />
                        <Label for="postalCode">postal code</Label>
                      </div>
                    </Flex>
                  </div>
                </QuestionArea>
                <AnchorLink to="/get-a-loan#part7" title="continue" />
              </div>
            </Part>
            <Part id="part7">
              <div>
                <PartTitle>title</PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>contact information</QuestionTitle>
                  <div className="spacing">
                    <Flex>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="John"
                        />
                        <Label for="firstName">first name</Label>
                      </div>
                      <div className="spacing-sm">
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Doe"
                        />
                        <Label for="lastName">last name</Label>
                      </div>
                    </Flex>
                    <Flex>
                      <div className="spacing-sm">
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="johndoe@gmail.com"
                        />
                        <Label for="email">your email</Label>
                      </div>
                      <div className="spacing-sm">
                        <Input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="403-000-0000"
                        />
                        <Label for="phone">your phone number</Label>
                      </div>
                    </Flex>
                  </div>
                </QuestionArea>
                <AnchorLink to="/get-a-loan#part8" title="continue" />
              </div>
            </Part>
            <Part id="part8">
              <div>
                <PartTitle>title</PartTitle>
                <QuestionArea className="spacing">
                  <QuestionTitle>what is your birth date?</QuestionTitle>
                  <BirthdayFlex>
                    <InputInline
                      type="text"
                      name="birthday_day"
                      id="birthday_day"
                      size="2"
                      maxLength="2"
                      defaultValue=""
                      placeholder="DD"
                    />
                    <InputInline
                      type="text"
                      name="birthday_month"
                      id="birthday_month"
                      size="2"
                      maxLength="2"
                      defaultValue=""
                      placeholder="MM"
                    />
                    <InputInline
                      type="text"
                      name="birthday_year"
                      id="birthday_year"
                      size="4"
                      maxLength="4"
                      defaultValue=""
                      placeholder="YYYY"
                    />
                  </BirthdayFlex>
                </QuestionArea>
                <AnchorLink to="/get-a-loan#part6" title="continue" />
              </div>
            </Part>
          </form>
        </Container>
      </Section>
    </Wrapper>
  )
}
