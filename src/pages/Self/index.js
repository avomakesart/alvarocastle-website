import React from "react";

import styled from "styled-components";

import SelfPicture from "../../assets/self.png";

const Container = styled.div`
  margin: 11rem auto;
  max-width: 1200px;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  padding: 1.3rem 3rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  width: 0;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    flex-direction: column
  }
`;

const DescriptionContainer = styled.div`
  border-left-style: solid;
  border-left-width: 1px;
  padding: 2rem;
  @media screen and (max-width: 800px) {
    border: none;
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
`;

const Self = () => {
  return (
    <Container>
      <img src={SelfPicture} alt="Myself" style={{ maxWidth: "35%" }} />
      <DescriptionContainer>
        <p>
          Front End - Software Engineer with a passion for art, style, design,
          and music.
        </p>
        <ButtonsContainer>
          <StyledButton><StyledLink href="https://instagram.com/_alvarocastle" target="_blank">Instagram</StyledLink></StyledButton>
          <StyledButton><StyledLink href="https://github.com/avomakesart" target="_blank">Github</StyledLink></StyledButton>
          <StyledButton><StyledLink href="https://es.scribd.com/document/437468915/Alvaro-Castillo-Resume-Min" target="_blank">Resume</StyledLink></StyledButton>
          <StyledButton><StyledLink href="https://www.linkedin.com/in/alvarocastle/" target="_blank">Linkedin</StyledLink></StyledButton>
        </ButtonsContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default Self;
