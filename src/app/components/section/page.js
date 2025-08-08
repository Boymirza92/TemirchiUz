'use client';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

// === STYLE == //

const SectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/logotip/fonUchun1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center calc(50% + 30px);
  color: #fff;
  padding: 40px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const LogotipContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 12rem;
  gap: 0.8rem;
`;
const Logotip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  gap: 2rem;
  transform: rotate(45deg);
`;

const Left = styled.div`
  width: 3rem;
  height: 8rem;
  background-color: #fbfbfeff;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
  height: 8rem;
`;
const Top = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fbfbfeff;
`;
const Bottom = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fbfbfeff;
`;

const SectionText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

   h1{
    font-size: 8rem;
    color: #fbfbfeff;
    font-family: lato, sans-serif;
    letter-spacing: 2px;
    text-shadow: 2px 2px 5px rgba(246, 241, 241, 0.5);
   }

  p {
     font-size: 2rem;
    color: #fbfbfeff;
    font-family: lato, sans-serif;
    letter-spacing: 2px;
    text-shadow: 2px 2px 5px rgba(246, 241, 241, 0.5);
  }
`;

const LeftImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const RightImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* flex: 1; */
`;

const StyledImage = styled.div`
  img {
    width: 15rem;
    height: 12rem;
    border-radius: 3px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

const Section = () => {
  return(
  <SectionWrapper>  
    <LogotipContainer>
        <Logotip>
            <Left />
            <Right>
              <Top />
              <Bottom />
            </Right>
        </Logotip>
    </LogotipContainer>
    <SectionText>
    
      <h1>Temirchi</h1>
      <p>o'zbek milliy brendi</p>
      <p>sizga xizmat ko'rsatishga tayyor</p>
    </SectionText>
   
  </SectionWrapper>

  )
};

export default Section;
