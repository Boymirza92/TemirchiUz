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
  background-image: url('/temirMaxsulot/naves/navesFon.jpg');
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
            Soyabonlar uy hovlisi, do'kon yoki korxonangiz uchun qulaylik va
            estetik ko'rinish beruvchi eng muhim elementlardan biridir. Ular
            nafaqat quyosh va yomg'irdan himoya qiladi, balki tashqi ko'rinishni
            ham bezatadi. Bizning soyabonlarimiz mustahkam metall
            konstruksiyadan tayyorlanadi va uzoq yillar xizmat qiladi.
          </h2>
        </InfoText>
        <ImageGrid>
          <img
            src="/temirMaxsulot/naves/naves2.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves2.jpg')}
          />

          <img
            src="/temirMaxsulot/naves/naves5.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves5.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves6.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves6.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves7.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves7.jpg')}
          />

          <img
            src="/temirMaxsulot/naves/naves3.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves3.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves8.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves8.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves9.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves9.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves10.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves10.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves4.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves4.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves11.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves11.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves12.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves12.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves13.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves13.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves14.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves14.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/naves15.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/naves15.jpg')}
          />
          <img
            src="/temirMaxsulot/naves/tapchan.jpg"
            alt="Naves"
            onClick={() => openImage('/temirMaxsulot/naves/tapchan.jpg')}
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
          Har bir soyabon buyurtmachi talabiga qarab o'lcham, dizayn va
          ranglarda ishlab chiqiladi. Siz ham orzuingizdagi soyabonga ega
          bo'lishni istasangiz, hoziroq biz bilan bog'laning. Professional
          jamoamiz sizga sifatli va zamonaviy yechimlarni taqdim etadi.
        </h2>
      </InfoText>
    </>
  );
};

export default App;
