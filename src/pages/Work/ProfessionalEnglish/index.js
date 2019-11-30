import React from "react";

import styled from "styled-components";

import ProfessionalMain from "../../../assets/professional-english/main.png";
import ProfessionalPayment from "../../../assets/professional-english/payment.png";
import ProfessionalMobile from "../../../assets/professional-english/mobile.png";
import ProfessionalMobileOpen from "../../../assets/professional-english/mobile-open.png";

const Container = styled.div`
  margin: 10rem auto;
  max-width: 1200px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin: 0 auto;
  }
`;

const DescriptionContainer = styled.div`
  border-top-style: solid;
  border-top-width: 0.3px;
`;

const CenterH2 = styled.h2`
  text-align: center;
`;

const StyledParagraph = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: underline;
  font-size: 1.3rem;
`;

const ImageWidth = {
  maxWidth: "100%",
  height: "auto"
};

const MobileImage = {
  width: "50%"
};

const TextCenter = {
  textAlign: "center"
};

const ProfessionalEnglish = () => {
  return (
    <Container>
      <StyledParagraph style={TextCenter}>
        Professional English it's an English Academy from Guadalajara, Jalisco,
        México.
      </StyledParagraph>

      <StyledParagraph>
        I helped them to rebuild their official website with the new
        technologies, like React, Node JS, and also we build an online learning
        platform with React and Wordpress
      </StyledParagraph>

      <DescriptionContainer>
        <CenterH2>
          Main Website created with React JS & styled components
        </CenterH2>
        <img src={ProfessionalMain} alt="Main Website" style={ImageWidth} />
        <CenterH2>Payment solution using NodeJs and Stripe</CenterH2>
        <img
          src={ProfessionalPayment}
          alt="Payment Section"
          style={ImageWidth}
        />
        <CenterH2>Mobile First</CenterH2>
        <img
          src={ProfessionalMobile}
          alt="Payment Section"
          style={MobileImage}
        />
        <img
          src={ProfessionalMobileOpen}
          alt="Payment Section"
          style={MobileImage}
        />
      </DescriptionContainer>
      <StyledParagraph>
        Reach them up, contact them if you want amazing english classes.
      </StyledParagraph>
      <StyledLink
        href="https://professionalenglishgdl.com"
        target="_blank"
        style={TextCenter}
      >
        professionalenglishgdl.com
      </StyledLink>
    </Container>
  );
};

export default ProfessionalEnglish;
