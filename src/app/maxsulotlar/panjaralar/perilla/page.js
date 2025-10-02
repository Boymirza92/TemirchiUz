'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation } from 'swiper/modules';

const slidesData = [
  {
    img: '/temirmaxsulot/perilla/perila22.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila23.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila24.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila25.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila26.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila27.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila28.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila29.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila30.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila31.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila32.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila33.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila34.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila35.jpg',
    alt: 'Perila',
  },
  {
    img: '/temirmaxsulot/perilla/perila36.jpg',
    alt: 'Perila',
  },
];

// == STYLE == //

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  background-image: url('/temirMaxsulot/perilla/perila23.jpg');
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
            Perila — uy, bino va boshqa inshootlarning zinapoya, balkon yoki
            ayvon qismlarida xavfsizlikni ta'minlovchi, shu bilan birga tashqi
            ko'rinishga nafislik beruvchi muhim element hisoblanadi. Mustahkam
            metallardan yasalgan perilalar turli naqsh va dizaynlarda ishlab
            chiqiladi va uyingiz interyeri hamda eksteryeriga uyg'unlashib
            boradi. Perilalar yordamida nafaqat xavfsiz va qulay foydalanish
            imkoniyati yaratiladi, balki binoga chiroyli estetik ko'rinish ham
            qo'shiladi. Bizning ishxonamiz tayyorlaydigan perilalar yuqori
            sifat, mustahkamlik va uzoq muddat xizmat qilish xususiyatlari bilan
            ajralib turadi.
          </h2>
        </InfoText>
        <ImageGrid>
          <img
            src="/temirMaxsulot/perilla/perila1.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila1.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila2.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila2.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila3.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila3.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila4.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila4.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila5.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila5.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila6.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila6.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila7.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila7.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila8.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila8.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila9.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila9.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila10.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila10.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila11.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila11.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila12.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila12.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila13.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila13.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila14.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila14.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila15.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila15.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/Perila16.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/Perila16.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila17.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila17.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila18.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila18.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila19.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila19.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila20.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila20.jpg')}
          />
          <img
            src="/temirMaxsulot/perilla/perila21.jpg"
            alt="Perila"
            onClick={() => openImage('/temirMaxsulot/perilla/perila21.jpg')}
          />
        </ImageGrid>
        {selectedImage && (
          <ModalOverlay onClick={closeImage}>
            <ModalImage src={selectedImage} alt="Selected" />
          </ModalOverlay>
        )}
      </GallerySection>
      <SliderContainer>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="SlideWrapper">
              <img
                src={slide.img}
                alt={slide.alt}
                onClick={() => openImage(slide.img)}
              />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
        {selectedImage && (
          <ModalOverlay onClick={closeImage}>
            <ModalImage src={selectedImage} alt="Selected" />
          </ModalOverlay>
        )}
      </SliderContainer>
      <InfoText>
        <h2>
          Har bir perila loyihasi mijozning didi va talabiga mos ravishda buyurtma
          asosida ishlab chiqiladi. Ular nafaqat xavfsizlikni, balki uyingizning
          go'zalligini ham oshiradi. Siz ham orzu qilgan perilani buyurtma
          qilish uchun biz bilan bog'laning.
        </h2>
      </InfoText>
    </>
  );
};

export default App;
