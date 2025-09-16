'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// == STYLE == //

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh; /* height o'rniga min-height yaxshiroq */
  background-image: url('/qurilish/havoza/imageCopy.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding: 3rem;
  box-sizing: border-box;
`;

const LogotipContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 12rem;
  height: 12rem;

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
  background-color: #1f1f69ff;

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
  background-color: #1f1f69ff;

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;
const Bottom = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #1f1f69ff;

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
    color: #1f1f69ff;
    font-family: lato, sans-serif;
    letter-spacing: 2px;
    text-shadow: 2px 2px 5px rgba(254, 249, 249, 0.5);
  }

  p {
    font-size: 2rem;
    color: rgba(234, 228, 227, 1);
    font-family: lato, sans-serif;
    letter-spacing: 2px;
    backdrop-filter: blur(0.5px);
    font-weight: bold;
    text-shadow: 2px 2px 10px #110e0eff;
    text-align: center;
    text-shadow: 2px 2px 5px rgba(10, 10, 10, 10);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 5rem;
    }
  }
`;

 const GallerySection = styled.section`
  width: 100%;
  min-height: 100vh; /* Bu blok ham kamida ekran bo'yicha joy egallaydi */
  background-color: #1a1a1d; /* Orqa fon uchun to'q rang */
  padding: 5rem 2rem; /* Kontent uchun yuqoridan va yonlardan joy */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const GalleryTitle = styled.h2`
  font-size: 3rem;
  color: #f4f4f4;
  margin-bottom: 2rem;
  font-family: lato, sans-serif;
  border-bottom: 2px solid #1f1f69ff;
  padding-bottom: 1rem;

  @media(max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

// ImageCard nomini ImageGrid'ga o'zgartirdik, ma'nosi aniqroq bo'lishi uchun
const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Rasmlar sig'maganda pastki qatorga tushadi */
  gap: 2rem;
  width: 100%;
  max-width: 1200px; /* Galereyaning maksimal kengligi */
  
  img {
    width: 300px;
    height: 250px;
    object-fit: cover; /* Rasm o'ziga ajratilgan joyni to'liq egallaydi */
    border-radius: 8px;
    border: 3px solid #333;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: scale(1.05) translateY(-10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    }
  }

  @media (max-width: 768px) {
    img {
      width: 100%; /* Mobil qurilmada rasm to'liq kenglikni egallaydi */
    }
  }
`;


const App = () => {
  return (
    <>
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
        <p>
          sizni qurilishlaringizga mustahkam va ishonchli <br />
          havozalarni taklif qiladi
        </p>
      </SectionText>
      <GallerySection>
        <GalleryTitle>Bizning Ishlarimizdan Namunalar</GalleryTitle>
        <ImageGrid>
          <img src="/qurilish/havoza/image.png" alt="Lesa 1" />
          <img src="/qurilish/havoza/lesa7.jpg" alt="Lesa 2" />
          <img src="/qurilish/havoza/image.png" alt="Lesa 3" />
          <img src="/qurilish/havoza/lesa7.jpg" alt="Lesa 4" />
        </ImageGrid>
      </GallerySection>
    </SectionWrapper>
    </>
  );
};

export default App;
