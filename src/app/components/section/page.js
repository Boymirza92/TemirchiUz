'use client';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// === STYLE == //

const SectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/logotip/fonUchun1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center calc(50% + 30px);
  color: #fff;
  padding: 40px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  /* flex-wrap: wrap; */
`;

const BackgroundVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  pointer-events: none;
`;

const LogotipContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 12rem;
  height: 12rem;
  gap: 0.8rem;

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
  background-color: #fbfbfeff;

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
  background-color: #fbfbfeff;

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;
const Bottom = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fbfbfeff;

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
    color: #fbfbfeff;
    font-family: lato, sans-serif;
    letter-spacing: 2px;
    text-shadow: 2px 2px 5px rgba(246, 241, 241, 0.5);
  }

  p {
    font-size: 2rem;
    color: #fbfbfeff;
    font-family: lato, sans-serif;
    letter-spacing: 2px;
    text-shadow: 2px 2px 5px rgba(246, 241, 241, 0.5);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 5rem;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45));
  pointer-events: none;
`;

// === HERO SECTION ===
const Section = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

   useEffect(() => {
    // 5 soniyadan keyin videoni ko‘rsatish
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      const p = videoRef.current.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [showVideo]);
  return (
    <SectionWrapper>
      <BackgroundVideo
        ref={videoRef}
        visible={showVideo}
        autoPlay
        muted
        loop
        playsInline
        poster="logotip/fonUchun1.jpg"
      >
        <source src="temirMaxsulot/video/fonVideo.mp4" />
        sizning brouzeringiz video farmatini qo'llab-quvatlamaydi.
      </BackgroundVideo>
      <Overlay />
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
        <p>sizga xizmat ko'rsatishga tayyor</p>
      </SectionText>
    </SectionWrapper>
  );
};

export default Section;
