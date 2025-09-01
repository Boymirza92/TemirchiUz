'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';

// === Asosiy Navigatsiya Styled Componentlari === //

const Nav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  top: 0;
  z-index: 1000;
  min-height: 64px;
  background-color: #1e1d1dff;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  h1 {
    font-size: 1.5rem;
    line-height: 1.2;
    margin: 0;
    font-weight: 700;
    text-align: center;
    span {
      font-size: 0.8rem;
      color: #dfddd7ff;
      font-weight: 400;
      display: block;
    }
  }
`;
const Logotip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
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
const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 25px;
  height: 20px;
  justify-content: space-between;
  z-index: 1001;

  span {
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
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

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    background-color: #1f1f1f;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    padding-top: 5rem;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    align-items: flex-start;
    padding-left: 2rem;
  }
`;

// === Ko'p bosqichli menyu uchun stillar === //

const SubMenu = styled.div`
  display: none;
  position: absolute;
  top: -0.3rem;
  left: 100%;
  backdrop-filter: blur(10px);
  padding: 1rem;
  min-width: 10rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  z-index: 1002;

  a {
    margin-bottom: 0.5rem;
    display: block;

    &:hover {
      color: #d0c7c7ff;
      font-size: 1.02rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: static;
    box-shadow: none;
    padding: 0.5rem 0 0.5rem 1rem;
    background: transparent;
  }
`;

const SubMenuItem = styled.div`
  position: relative;
  padding: 0.8rem 0;
  cursor: pointer;

  &:hover {
    backdrop-filter: blur(10px);

    span {
      color: #c3c5c6ff;
      font-size: 1.02rem;
      transition: all 0.1s ease-in-out;

    }
  }

  span {
    color: #fff;
    font-weight: 600;
  }

  &:hover > ${SubMenu} {
    @media (min-width: 769px) {
      display: block;
    }
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  backdrop-filter: blur(10px);
  /* background: #1f1f1f; */
  padding: 0 1rem;
  min-width: 220px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
    position: static;
    box-shadow: none;
    padding: 0.5rem 0 0;
    background: transparent;
  }
`;

const NavItem = styled.li`
  position: relative;
  padding: 1rem 0;
  cursor: pointer;

  & > a {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #c3c5c6ff;
    }
  }

  &:hover > ${DropdownMenu} {
    @media (min-width: 769px) {
      display: block;
    }
  }
`;

// === Navbar Komponentining o'zi === //

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (subMenuName) => {
    if (activeSubMenu === subMenuName) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(subMenuName);
    }
  };

  const handleMenuToggle = () => {
    if (menuOpen) {
      setActiveSubMenu(null);
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <Link href="/" passHref>
        <LogoContainer>
          <Logotip>
            <Left />
            <Right>
              <Top />
              <Bottom />
            </Right>
          </Logotip>
          <h1>
            Temirchi
            <span>o'zbek milliy brendi</span>
          </h1>
        </LogoContainer>
      </Link>

      <Burger className={menuOpen ? 'open' : ''} onClick={handleMenuToggle}>
        <span />
        <span />
        <span />
      </Burger>

      <NavLinks open={menuOpen}>
        <NavItem>
          <Link href="/">Bosh sahifa</Link>
        </NavItem>

        <NavItem>
          <a onClick={(e) => e.preventDefault()}>Mahsulotlar</a>
          <DropdownMenu>
            <SubMenuItem onClick={() => toggleSubMenu('qurilish')}>
              <span>Qurilish mahsulotlari </span>
              <SubMenu open={activeSubMenu === 'qurilish'}>
                <Link href="/maxsulotlar/qurilishlar/havoza">Havoza</Link>
                <Link href="/maxsulotlar/qurilishlar/manalitLesa">
                  Manalit havoza{' '}
                </Link>
                <Link href="/maxsulotlar/qurilishlar/manalitStoyka">
                  Manalit ustun
                </Link>
                <Link href="/maxsulotlar/qurilishlar/boshqalar">Boshqalar</Link>
              </SubMenu>
            </SubMenuItem>

            <SubMenuItem onClick={() => toggleSubMenu('temir')}>
              <span>Temir mahsulotlari</span>
              <SubMenu open={activeSubMenu === 'temir'}>
                <Link href="/maxsulotlar/panjaralar/darvoza">Darvoza</Link>
                <Link href="/maxsulotlar/panjaralar/panjara">Panjara</Link>
                <Link href="/maxsulotlar/panjaralar/perilla">Perilla</Link>
                <Link href="/maxsulotlar/panjaralar/soyabon">Soyabon</Link>
                <Link href="/maxsulotlar/panjaralar/tosiq">To'siqlar</Link>
                <Link href="/maxsulotlar/panjaralar/boshqalar">Boshqalar</Link>
              </SubMenu>
            </SubMenuItem>
          </DropdownMenu>
        </NavItem>

        <NavItem>
          <Link href="/gallery">Galereya</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">Biz haqimizda</Link>
        </NavItem>
        <NavItem>
          <Link href="/contact">Bog‘lanish</Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
