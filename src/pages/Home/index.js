import React from "react";

import styled from "styled-components";
import ReactRotatingText from "react-rotating-text";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledRotatingText = styled(ReactRotatingText)`
font-size: 2rem;
margin: 2rem;
`;

const Home = () => {
  return (
    <Container>
      <StyledRotatingText
        items={[
          "Hello My name is Alvaro Castillo",
          "I'm from Guadalajara, México",
          "and I'm a Software Engineer"
        ]}
      />
    </Container>
  );
};

export default Home;