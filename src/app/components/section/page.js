'use client';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// === STYLE == //

const SectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/logotip/fonUchun1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center calc(50% + 30px);
  position: relative;
  padding: 3rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const LogotipContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 12rem;
  height: 12rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 7rem;
    height: 7rem;
  }
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

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Left = styled.div`
  width: 3rem;
  height: 8rem;
  background-color: #fbfbfeff;

  @media (max-width: 768px) {
    width: 2rem;
    height: 5rem;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
  height: 8rem;

  @media (max-width: 768px) {
    width: 2rem;
    height: 5rem;
    gap: 1rem;
  }
`;
const Top = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fbfbfeff;

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;
const Bottom = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fbfbfeff;

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

const SectionText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  h1 {
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

  @media (max-width: 768px) {
    h1 {
      font-size: 5rem;
    }
  }
`;

// === HERO SECTION ===

const Section = () => {


  return (
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
  );
};

export default Section;
