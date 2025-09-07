'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from 'react-icons/fa';

// === Style === //
const FooterContainer = styled.footer`
  background: #111;
  color: #f5f5f5;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
`;

const FooterTop = styled.div`
  max-width: 81rem;
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Brand = styled.div`
  width: 100%;
  h2 {
    font-size: 2rem;
    margin-bottom: 0.3rem;
    color: #cbc2dfff;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px #fbbf24;
  }
  p {
    font-size: 1.1rem;
    opacity: 0.8;
    letter-spacing: 0.5px;
  }
  }
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-top: 0.3rem;
  line-height: 1;


  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #f5f5f5;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;

    &:hover {
      color: #fbbf24;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 0.9rem;
  line-height: 1.7;
  /* text-align: start; */


  strong {
    color: #a89a77ff;
  }
`;

const Socials = styled.div`
  /* margin-top: 1.5rem; */
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: #f5f5f5;
    transition: color 0.2s;
    &:hover {
      color: #fbbf24;
    }
  }
`;

const Bottom = styled.div`
  margin-top: 2rem;
  font-size: 0.85rem;
  opacity: 0.7;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
`;

// === Component ===
const Footer = () => {
  return (
    <FooterContainer>
      <Brand>
          <h2>Temirchi</h2>
          <p>
            O‘zbek milliy brendi <br /> temir buyumlarda sifat va mustahkamlik
            ramzi
          </p>
        </Brand>
      <FooterTop>
        

        {/* Navigatsiya */}
        <NavLinks>
          <Link href="/">Bosh sahifa</Link>
          <Link href="/maxsulotlar">Mahsulotlar</Link>
          <Link href="/galereya">Galereya</Link>
          <Link href="/biz-haqimizda">Biz haqimizda</Link>
          <Link href="/boglanish">Bog‘lanish</Link>
        </NavLinks>

        {/* Kontakt */}
        <Contact>
          <p>
            <strong>Manzil:</strong> Toshkent, O‘zbekiston
          </p>
          <p>
            <strong>Tel:</strong> +998 90 123 45 67
          </p>
          <p>
            <strong>Email:</strong> info@temirchi.uz
          </p>
          <p>
            <strong>Ish vaqti:</strong> Dush–Yak: 09:00 – 20:00
          </p>
        </Contact>
        <Socials>
          ijtimoiy tarmoqlar
          <Link href="#">
            <FaFacebookF />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="#">
            <FaTelegramPlane />
          </Link>
          <Link href="#">
            <FaYoutube />
          </Link>
        </Socials>
      </FooterTop>
      <Bottom>© 2025 Temirchi. Barcha huquqlar himoyalangan.</Bottom>
    </FooterContainer>
  );
  J;
};

export default Footer;
