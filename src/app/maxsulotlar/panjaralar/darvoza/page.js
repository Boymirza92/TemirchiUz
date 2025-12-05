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
    img: '/temirmaxsulot/darvoza/darvoza19.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza20.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza29.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza30.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza31.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza32.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza33.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza34.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza35.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza36.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza37.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza38.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza39.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza40.jpg',
    alt: 'Darvoza',
  },
  {
    img: '/temirmaxsulot/darvoza/darvoza.jpg',
    alt: 'Darvoza',
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
  background-image: url('/temirMaxsulot/darvoza/darvozaFon6.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding: 3rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
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
      font-size: 1rem;
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

  @media (max-width: 768px) {
    gap: 1rem;
    padding-top: 1rem;
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
    gap: 1rem;
    img {
      width: 90%;
      height: 30rem;
    }
  }
  @media (max-width: 400px) {
    gap: 0.5rem;
    img {
      width: 90%;
      height: 20rem;
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
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    font-size: 5rem;
    font-weight: bold;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;  
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

  
  @media (max-width: 768px) {
    .swiper-button-prev {
      left: 3rem;
      
    }
    .swiper-button-next {
      right: 3rem;
    }
    .SlideWrapper, img{
      width: 20rem;
      height: 25rem;
    }
  }

  @media (max-width: 400px) {
    .swiper-button-prev {
      left: 1rem;

    }
    .swiper-button-next {
      right: 1rem;
    }
    .SlideWrapper, img{
      width: 15rem;
      height: 25rem;
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

  @media (max-width: 400px) {
  }

  
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

  @media (max-width: 400px) {
    max-height: 100vw;
    max-width: 100vh;
    object-fit: contain;
    margin: 0;
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
          {/* <img src='/temirMaxsulot/darvoza/darvozaFon6.jpg'/> */}
        </SectionHero>
      </SectionWrapper>

      <GallerySection>
        <InfoText>
          <h2>
            Darvozalar — uy va hovlilarimizning nafaqat xavfsizligini
            ta'minlaydi, balki uyning umumiy ko'rinishiga ham katta ta'sir
            ko'rsatadi. Bizning ishxonamiz tomonidan ishlab chiqariladigan
            darvozalar mustahkam, zamonaviy dizaynga ega va uzoq muddat xizmat
            qilishi bilan ajralib turadi. Har bir mijozning didi va talabiga mos
            ravishda turli shakl va naqshlarda darvozalar tayyorlab beramiz.
          </h2>
        </InfoText>
        <ImageGrid>
          <img
            src="/temirMaxsulot/darvoza/darvoza1.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza1.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza2.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza2.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza3.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza3.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza4.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza4.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza5.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza5.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza6.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza6.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza7.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza7.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza8.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza8.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza9.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza9.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza10.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza10.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza11.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza11.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza12.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza12.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza13.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza13.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza14.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza14.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza15.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza15.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza16.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza16.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza17.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza17.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza18.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza18.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza41.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza41.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza42.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza42.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza43.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza43.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza44.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza44.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza45.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza45.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza46.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza46.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/47.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/47.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza48.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza48.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza49.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza49.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/darvoza50.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/darvoza50.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/kalitka1.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/kalitka1.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/kalitka2.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/kalitka2.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/kalitka3.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/kalitka3.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/kalitka4.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/kalitka4.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/kalitka5.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/kalitka5.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/kalitka6.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/kalitka6.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/kalitka7.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/kalitka7.jpg')}
          />
          <img
            src="/temirMaxsulot/darvoza/kalitka8.jpg"
            alt="Darvoza"
            onClick={() => openImage('/temirMaxsulot/darvoza/kalitka8.jpg')}
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
          Biz tayyorlaydigan darvozalar har bir mijozning o'ziga xos talabiga
          qarab, faqat buyurma asosida ishlab chiqariladi. Siz orzu qilgan
          shakl, naqsh yoki o'lchamdan qat'i nazar, biz uni sifatli metall va
          zamonaviy texnologiyalar yordamida amalga oshiramiz. <br /> Agar
          hovlingizga mustahkam, chiroyli va uzoq yillar xizmat qiladigan
          darvoza xohlasangiz — bugunoq biz bilan bog'laning. Sizning
          buyurtmangizni individual yondashuv bilan bajarishga tayyormiz!
        </h2>
      </InfoText>
    </>
  );
};

export default App;
