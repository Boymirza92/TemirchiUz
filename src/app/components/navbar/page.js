'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';

// === STYLE NAVBAR ===//

const Nav = styled.nav`
  background-color: #251d1dff;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 12rem;
  height: 4rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  h1 {
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    line-height: 1.2;
    margin: 0;
    text-align: center;
    font-family: inter, sans-serif;
  }
`;

const Logotip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  gap: 0.5rem;
  transform: rotate(45deg);
`;

const Left = styled.div`
  width: 1rem;
  height: 2.5rem;
  background-color: #fbfbfeff;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1rem;
  height: 2.5rem;
`;

const Top = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: #fbfbfeff;
`;

const Bottom = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: #fbfbfeff;
`;

// === NAVBAR LINK === //

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  width: 60%;

  a {
    color: #fff;
    font-size: 1.3rem;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    letter-spacing: 0.7px;

    &:hover {
      color: #adaba6ff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #1f1f1f;
    position: absolute;
    top: 64px;
    right: 0;
    width: 200px;
    padding: 16px;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const Icon = styled.div`
  img{
    width: 3rem;
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 25px;
  height: 20px;
  justify-content: space-between;

  span {
    height: 3px;
    background: #fff;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <Nav>
      <Link href="/">
        <Logo>
          <Logotip>
            <Left></Left>
            <Right>
              <Top></Top>
              <Bottom></Bottom>
            </Right>
          </Logotip>
          <h1>
            Temirchi <br /> o'zbek milliy <br /> brendi
          </h1>
        </Logo>
      </Link>
      <Burger
        className={menuOpen ? 'open' : ''}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </Burger>
      <NavLinks open={menuOpen}>
        <Link href="/">Bosh sahifa</Link>
        <Link href="/products">Mahsulotlar</Link>
        <Link href="/gallery">Galereya</Link>
        <Link href="/about">Biz haqimizda</Link>
        <Link href="/contact">Bog‘lanish</Link>
      </NavLinks>
      <Icon>
        <img src='/logotip/varchik.png' alt='Transformer'/>
      </Icon>
    </Nav>
  );
};

export default Navbar;
