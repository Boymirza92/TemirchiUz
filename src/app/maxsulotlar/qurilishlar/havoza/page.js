'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// == STYLE == //

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  background-image: url('/qurilish/havoza/imageCopy.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding: 3rem;
  box-sizing: border-box;
`;

const SectionHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50rem;
`;

// Logatip styled //
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

const InfoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 2rem 5rem;
  text-align: center;
  background-color: aquamarine;

  h2 {
    width: 80%;

    font-size: 1.3rem;
    color: #302e2eff;
    letter-spacing: 0.01rem;
  }
`;

const GallerySection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 2rem;
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

  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;

  img {
    width: 25rem;
    height: 22rem;
    object-fit: cover;
    border-radius: 4px;
    border: 3px solid #333;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05) translateY(-10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    }
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

// ==== MODAL ====
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);
  return (
    <>
      <SectionWrapper>
        <SectionHero>
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
        </SectionHero>
      </SectionWrapper>

      <GallerySection>
        <InfoText>
          <h2>
            Havoza — qurilish va ta'mirlash jarayonida balandlikda xavfsiz ishlash
            uchun mo'ljallangan metall konstruksiya. Mustahkamligi va qulayligi
            bilan ishni tez, xavfsiz va samarali bajarishga yordam beradi.
          </h2>
        </InfoText>
        <ImageGrid>
          <img
            src="/qurilish/havoza/imageCopy.png"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/havoza/imageCopy.png')}
          />
          <img
            src="/qurilish/havoza/lesa1.jpg"
            alt="Lesa 2"
            onClick={() => openImage('/qurilish/havoza/lesa1.jpg')}
          />
          <img
            src="/qurilish/havoza/lesa2.jpg"
            alt="Lesa 3"
            onClick={() => openImage('/qurilish/havoza/lesa2.jpg')}
          />
          <img
            src="/qurilish/havoza/lesa3.jpg"
            alt="Lesa 4"
            onClick={() => openImage('/qurilish/havoza/lesa3.jpg')}
          />
          <img
            src="/qurilish/havoza/lesa4.jpg"
            alt="Lesa 5"
            onClick={() => openImage('/qurilish/havoza/lesa4.jpg')}
          />
          <img
            src="/qurilish/havoza/lesa5.jpg"
            alt="Lesa 6"
            onClick={() => openImage('/qurilish/havoza/lesa5.jpg')}
          />
          <img
            src="/qurilish/havoza/lesa6.jpg"
            alt="Lesa 7"
            onClick={() => openImage('/qurilish/havoza/lesa6.jpg')}
          />
          <img
            src="/qurilish/havoza/lesa7.jpg"
            alt="Lesa 8"
            onClick={() => openImage('/qurilish/havoza/lesa7.jpg')}
          />
          <img
            src="/qurilish/havoza/lesa8.jpg"
            alt="Lesa 9"
            onClick={() => openImage('/qurilish/havoza/lesa8.jpg')}
          />
        </ImageGrid>
        {selectedImage && (
          <ModalOverlay onClick={closeImage}>
            <ModalImage src={selectedImage} alt="Selected" />
          </ModalOverlay>
        )}
      </GallerySection>
    </>
  );
};

export default App;
