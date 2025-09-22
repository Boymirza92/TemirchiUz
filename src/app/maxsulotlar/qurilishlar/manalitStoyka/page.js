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
  background-image: url('/qurilish/manalitUstun/stoyka02.png');
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

const InfoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 2rem 5rem;
  text-align: start;
  background-color: aquamarine;

  h2 {
    width: 80%;

    font-size: 1.3rem;
    color: #302e2eff;
    letter-spacing: 0.01rem;

    strong {
      text-align: start;
      font-weight: 600;
      font-size: 1.2rem;
    }
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
        <SectionHero></SectionHero>
      </SectionWrapper>

      <GallerySection>
        <InfoText>
          <h2>
            Manalit stoyka — bu qurilish jarayonida betonni quyish vaqtida
            qoliplarni ko'tarib turuvchi mustahkam tayanch mexanizm. U beton
            qotguniga qadar qoliplarni ishonchli ushlab turadi va xavfsiz
            ishlashni ta'minlaydi.{' '}
            <strong>
              <br />
              <br />
              - Asosiy vazifasi: monolit betonni ko'tarish va mustahkamlash.{' '}
              <br />
              - Afzalliklari:
              kuchli, bardoshli, qayta ishlatish mumkin, oson o'rnatiladi va
              yechiladi.
              <br />
               - Qo'llanish sohasi: 
              turar-joy va sanoat binolari, ko'priklar hamda boshqa yirik
              inshootlar qurilishida.{' '}
            </strong>
          </h2>
        </InfoText>
        <ImageGrid>
          <img
            src="/qurilish/manalitUstun/stoyka1.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka1.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka2.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka2.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka3.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka3.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka4.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka4.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka5.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka5.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka9.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka9.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka7.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka7.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka8.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka8.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka6.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka6.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka10.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka10.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka11.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka11.jpg')}
          />
          <img
            src="/qurilish/manalitUstun/stoyka12.jpg"
            alt="Lesa 1"
            onClick={() => openImage('/qurilish/manalitUstun/stoyka12.jpg')}
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
