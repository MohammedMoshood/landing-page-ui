import React from 'react'
import SmallCards from "./SmallCards";
import {
  smallCard1,
  smallCard2,
  smallCard3,
} from "./Data";
import { InfoRow } from "./SmallCardElements";
import styled from 'styled-components';

const ServicesWrapper = styled.div`
justify-content: center;
align-items: center;

`
const ServicesText = styled.h4`
text-align: center;
font-size: 48px;
font-family: Arial, Helvetica, sans-serif;
padding-bottom: 30px;
margin-top: -70px;
color: #222;
z-index: 3;
`
const Container = styled.div`
width: 100%;
justify-content: center;
align-items: center;
text-decoration: none;
background: tan;
`

const Services = () => {
  return (
    <>
      <Container id="services">
        <InfoRow>
          <SmallCards {...smallCard1}></SmallCards>
          <SmallCards {...smallCard2}></SmallCards>
          <SmallCards {...smallCard3}></SmallCards>
        </InfoRow>
        <ServicesWrapper>
          <ServicesText>Our Services</ServicesText>
        </ServicesWrapper>
      </Container>
    </>
  );
}

export default Services