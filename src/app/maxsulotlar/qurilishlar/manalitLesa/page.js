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
  background-image: url('/qurilish/manalitHavoza/ManalitLesa8.png');
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
            Manalit havoza — qurilish jarayonida ikki tomonlama vazifani
            bajaruvchi ishonchli konstruktsiya. U nafaqat ustun vazifasini,
            balki takomillashtirilgan holda havozaning imkoniyatlarini ham
            o'zida mujassam etadi. Beton quyish va balandlikda bajariladigan
            ishlar uchun mustahkam tayanch bo'lib xizmat qiladi. Bu bilan ishni
            tez, xavfsiz va samarali bajarishga yordam beradi
          </h2>
        </InfoText>
        <ImageGrid>
          <img
            src="/qurilish/manalitHavoza/manalitLesa1.jpg"
            alt="Lesa 1"
            onClick={() =>
              openImage('/qurilish/manalithavoza/manalitLesa1.jpg')
            }
          />
          <img
            src="/qurilish/manalitHavoza/manalitLesa2.jpg"
            alt="Lesa 2"
            onClick={() =>
              openImage('/qurilish/manalithavoza/manalitLesa2.jpg')
            }
          />
          <img
            src="/qurilish/manalitHavoza/manalitLesa3.jpg"
            alt="Lesa 3"
            onClick={() =>
              openImage('/qurilish/manalithavoza/manalitLesa3.jpg')
            }
          />
          <img
            src="/qurilish/manalitHavoza/manalitLesa4.jpg"
            alt="Lesa 4"
            onClick={() =>
              openImage('/qurilish/manalithavoza/manalitLesa4.jpg')
            }
          />
          <img
            src="/qurilish/manalitHavoza/manalitLesa9.jpg"
            alt="Lesa 5"
            onClick={() =>
              openImage('/qurilish/manalithavoza/manalitLesa9.jpg')
            }
          />
          <img
            src="/qurilish/manalitHavoza/manalitLesa6.jpg"
            alt="Lesa 6"
            onClick={() =>
              openImage('/qurilish/manalithavoza/manalitLesa6.jpg')
            }
          />
          <img
            src="/qurilish/manalitHavoza/manalitLesa10.jpg"
            alt="Lesa 7"
            onClick={() =>
              openImage('/qurilish/manalithavoza/manalitLesa10.jpg')
            }
          />
          <img
            src="/qurilish/manalitHavoza/manalitLesa11.jpg"
            alt="Lesa 8"
            onClick={() =>
              openImage('/qurilish/manalithavoza/manalitLesa11.jpg')
            }
          />
          <img
            src="/qurilish/manalitHavoza/manalitLesa5.jpg"
            alt="Lesa 9"
            onClick={() =>
              openImage('/qurilish/manalithavoza/manalitLesa8.png')
            }
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
