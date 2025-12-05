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

  @media (max-width: 400px) {
    background-position: -6.3rem center;
    max-height: 40rem;
  }
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
  @media (max-width: 768px) {
    padding: 1rem 2rem;

    h2 {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 400px) {
    margin-top: -3rem;
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
    gap: 0.5rem;
    img {
      width: 90%;
      height: 30rem;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 100%;
      height: 20rem;
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
            Havoza — qurilish va ta'mirlash jarayonida balandlikda xavfsiz
            ishlash uchun mo'ljallangan metall konstruksiya. Mustahkamligi va
            qulayligi bilan ishni tez, xavfsiz va samarali bajarishga yordam
            beradi.
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
        <InfoText>
          <h2>
            Ushbu galereyada siz biz ishlab chiqargan havoza modellari bilan
            tanishdingiz. Bizning metall konstruksiyalarimizni arzon narxlarda
            sotib olishingiz yoki ijaraga olishingiz mumkin. Mustahkamligi,
            sifatli materiali va xavfsizligi bilan ish jarayonini tez va
            samarali bajarishga yordam beradi. Qo'shimcha ma'lumot va buyurtma
            uchun biz bilan bog'laning.
          </h2>
        </InfoText>
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
