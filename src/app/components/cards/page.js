'use client';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const cardData = [
  {
    href: '/maxsulotlar/panjaralar/panjara',
    imgSrc: '/temirMaxsulot/panjara/panjara5.jpg',
    alt: 'Panjara',
    text: "Romlaringiz uchun yuqori sifatli va mustahkam panjaralar",
  },
  {
    href: '/maxsulotlar/panjaralar/darvoza',
    imgSrc: '/temirMaxsulot/darvoza/darvoza2.jpg',
    alt: 'Darvoza',
    text: 'Uyingizni sifatli va mustahkam darvoza bilan bezating',
  },
  {
    href: '/maxsulotlar/panjaralar/tosiq',
    imgSrc: '/temirMaxsulot/tosiq/tosiq3.jpg',
    alt: 'Tosiq',
    text: "Imoratingiz ko'cha qismini chiroyli to'siqlar bilan bezating",
  },
  {
    href: '/maxsulotlar/panjaralar/soyabon',
    imgSrc: '/temirMaxsulot/naves/naves11.jpg',
    alt: 'Soyabon',
    text: "Quyoshdan va yog'ingarchilikdan himoyalaning va uyingizni yanada go'zal qiling ",
  },
  {
    href: '/maxsulotlar/panjaralar/perilla',
    imgSrc: '/temirMaxsulot/perilla/perila1.jpg',
    alt: 'Perilla',
    text: 'Uyingizni mustahkam perilla bilan bezating va yosh bolalarni havfsizligini taminlang',
  },
  {
    href: '/maxsulotlar/panjaralar/boshqalar',
    imgSrc: '/temirMaxsulot/boshqa/lyustra.jpg',
    alt: 'Qandil',
    text: 'Uyingiz ichini temir qandil bilan jozibali qiling',
  },
  {
    href: '/maxsulotlar/panjaralar/boshqalar',
    imgSrc: '/temirMaxsulot/boshqa/demaxot.jpg',
    alt: 'Dudbo`ron',
    text: "Oshxonangiga temirdan dudbo'ron qo'ying va uyingiz xavfsizligini ta'minlang",
  },
];

// === Stillar  === //

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;

`;

const CardImageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0; 
`;

const CardText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(45, 43, 43, 0.6);
  color: white;
  text-align: center;
  padding: 0.8rem;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const StyledImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 25rem;
  height: 25rem;
  border-radius: 5px;

  a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover; 
    transition: transform 0.4s ease;
    border-radius: 3px;
  }

  &:hover ${CardText} {
    opacity: 1;
  }

  &:hover img {
    transform: perspective(1000px) rotateY(5deg) rotateX(2deg) translateY(-10px);
  }
`;

const VideoContainer = styled.div`

  position: relative;
  width: 80%;
  height: 50rem;
  margin: 2rem auto;

  video {
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40rem;
    border-radius: 5px;
    object-fit: cover;
  }

  button {
    position: absolute;
    bottom: 12rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

// === Asosiy Komponent === //
const CardWrapper = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
   
    <SectionWrapper>
      <CardImageContainer>
        {cardData.map((card, index) => (
          <StyledImage key={index}>
            <Link href={card.href}>
              <img src={card.imgSrc} alt={card.alt} />
              <CardText>{card.text}</CardText>
            </Link>
          </StyledImage>
        ))}
      </CardImageContainer>

   
      <VideoContainer>
        <video ref={videoRef} muted loop>
          <source src="/temirMaxsulot/video/pechka.mp4" type="video/mp4" />
          Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
        </video>
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </VideoContainer>
    </SectionWrapper>
  );
};

export default CardWrapper;