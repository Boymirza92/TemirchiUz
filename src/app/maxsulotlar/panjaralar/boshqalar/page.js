'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation } from 'swiper/modules';

// == STYLE == //

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  background-image: url('/temirMaxsulot/boshqa/lyustra.jpg');
  background-size: contain;
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

// == SLIDER == //
const SliderContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  height: auto;
  margin: 3rem auto;

  .swiper {
    padding: 2rem 0;
  }

  .swiper-slide {
    transition: all 0.4s ease;
    filter: blur(3px);
    opacity: 0.5;
    transform: scale(0.8);
  }

  .swiper-slide-active {
    filter: blur(0);
    opacity: 1;
    transform: scale(1);
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f5efefff;
    background-color: rgba(0, 0, 0, 0.3);
    /* opacity: 0.5; */
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    font-size: 5rem;
    font-weight: bold;
    top: 50%;
    transform: translateY(-50%);
    position: absolute; /* 🔥 bu shart */
    z-index: 10;
  }

  .swiper-button-next {
    right: 15rem;
  }

  .swiper-button-prev {
    left: 15rem;
  }

  .SlideWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 35rem;

    img {
      width: 30rem;
      height: 35rem;
      object-fit: cover;
      border-radius: 1px;
      cursor: pointer;
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
            Temirdan yasalgan buyumlar: bu nafaqat mustahkamlik, balki nafislik
            va estetik go'zallikni o'zida mujassam etgan san'at asarlari. Biz
            sizning uyingiz, hovlingiz yoki ish joyingiz uchun turli shakl va
            o'lchamlardagi temir buyumlarni ishlab chiqamiz: bezakli stollar,
            o'rindiqlar, panjaralar, tokchalar va yana ko'plab maxsus
            buyurtmalar. Har bir mahsulot sifatli materiallardan, puxta ishlov
            bilan tayyorlanadi.
          </h2>
        </InfoText>
        <ImageGrid>
          <img
            src="/temirMaxsulot/boshqa/demaxot.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/demaxot.jpg')}
          />
          <img
            src="/temirMaxsulot/boshqa/demaxot2.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/demaxot2.jpg')}
          />
         
          <img
            src="/temirMaxsulot/boshqa/demaxot3.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/demaxot3.jpg')}
          />
          <img
            src="/temirMaxsulot/boshqa/jalyuzi.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/jalyuzi.jpg')}
          />
          <img
            src="/temirMaxsulot/boshqa/jalyuzi2.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/jalyuzi2.jpg')}
          />
          <img
            src="/temirMaxsulot/boshqa/kovka.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/kovka.jpg')}
          />
          <img
            src="/temirMaxsulot/boshqa/lyustra.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/lyustra.jpg')}
          />
          <img
            src="/temirMaxsulot/boshqa/portichka.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/portichka.jpg')}
          />
          <img
            src="/temirMaxsulot/boshqa/skameka.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/skameka.jpg')}
          />
          <img
            src="/temirMaxsulot/boshqa/stol.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/stol.jpg')}
          />
          <img
            src="/temirMaxsulot/boshqa/tapchan.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/boshqa/tapchan.jpg')}
          />
          <img
            src="/temirMaxsulot/tosiq/tosiq1.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/tosiq/tosiq1.jpg')}
          />
          <img
            src="/temirMaxsulot/tosiq/tosiq2.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/tosiq/tosiq2.jpg')}
          />
          <img
            src="/temirMaxsulot/tosiq/tosiq3.jpg"
            alt="Panjara"
            onClick={() => openImage('/temirMaxsulot/tosiq/tosiq3.jpg')}
          />
        </ImageGrid>
        {selectedImage && (
          <ModalOverlay onClick={closeImage}>
            <ModalImage src={selectedImage} alt="Selected" />
          </ModalOverlay>
        )}
      </GallerySection>

      <InfoText>
        <h2>
          Siz ham o'z makoningizni temirning betakror jozibasi bilan
          boyitmoqchimisiz? Bizga murojaat qiling — sizning g'oyangizni mukammal
          buyumga aylantirib beramiz. Har bir buyurtma alohida yondashuv bilan,
          faqat siz uchun yaratiladi!
        </h2>
      </InfoText>
    </>
  );
};

export default App;
