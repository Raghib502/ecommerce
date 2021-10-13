import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 500;
`;

const Announcement = () => {
  return (
  
    <Container>Super Deal!! Free shipping</Container>
    
    );
};

export default Announcement;
