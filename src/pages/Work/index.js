/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProfessionalEnglish from "../../assets/professional-english/professional.png";
import Nerea from "../../assets/nerea/nerea.png";
import CreativeChaChacha from "../../assets/creative-cha-cha-cha/creative-logo.png";

const NavLink = styled(Link)`
  padding-left: 6rem;
  cursor: pointer;
`;

const NereaNavLink = styled(Link)`
  padding-left: 6rem;
  cursor: pointer;
`;

const GridContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: inline-block;
    text-align: center
    margin: 0 0 0 -3rem;
  }
`;

const StyledImage = styled.img`
  max-width: 50%;
  @media screen and (max-width: 800px) {
    width: 33.3%;
    padding: 1rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  @media screen and (max-width: 800px) {
    margin-left: 6rem;
  }
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.3rem;
`;

const Work = () => {
  return (
    <>
      <GridContainer>
        <NavLink to="/professional-english">
          <StyledImage
            src={ProfessionalEnglish}
            alt="English Academy"
            style={{ maxWidth: "50%" }}
          />
          <StyledParagraph>
            <StyledLink
              href="https://professionalenglishgdl.com"
              target="_blank"
            >
              Professional English
            </StyledLink>
          </StyledParagraph>
        </NavLink>
        <NereaNavLink to="/nereabotanicals">
          <StyledImage
            src={Nerea}
            alt="Organic Cosmetics Brand"
            style={{ width: "300rem" }}
          />
          <StyledParagraph>
            <StyledLink href="https://nereabotanicals.com" target="_blank">
              Nerea Botanicals
            </StyledLink>
          </StyledParagraph>
        </NereaNavLink>
        <NavLink to="/creative-cha-cha-cha">
          <StyledImage
            src={CreativeChaChacha}
            alt="LMS Nannies"
            style={{ width: "300rem" }}
          />
          <StyledParagraph>
            <StyledLink href="https://creativechachachaonline.com" target="_blank">
              Creative Cha Cha Cha 
            </StyledLink>
          </StyledParagraph>
        </NavLink>
      </GridContainer>
    </>
  );
};

export default Work;
