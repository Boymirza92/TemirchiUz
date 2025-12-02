'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';

// === Asosiy Navigatsiya Styled Componentlari === //

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: #fff;
  top: 0;
  z-index: 1000;
  min-height: 64px;
  background-color: #1e1d1dff;

  @media (max-width: 768px) {
    padding-left: 3rem;}
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
    position: absolute;
    top: 2rem;
    right: 3rem;
  }
  @media (max-width: 400px) {
    right: 2rem;
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
    position: fixed;
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

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 1rem;
  min-width: 220px;
  background-color: #fdeeeeff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: static;
    box-shadow: none;
    padding: 0.5rem 0 0;
    background: transparent;
    ;
  }
`;

const SubMenu = styled.div`
  display: none;
  position: absolute;
  top: -0.3rem;
  left: 100%;
  padding: 1rem;
  min-width: 10rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  z-index: 1002;
  background-color: #fff;
  color: #112b47;
  font-size: 1rem;
  font-weight: bold;

  a {
    margin-bottom: 0.5rem;
    display: block;

    &:hover {
      font-size: 0.95rem;
      transition: all 0.1s ease-in-out;
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
  padding: 0.5rem 0;
  cursor: pointer;
  color: #112b47;

  span {
    font-weight: bold;
  }

  &:hover > ${SubMenu} {
    @media (min-width: 769px) {
      display: block;
    }
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

const MobileFix = styled.div`
  @media (max-width: 768px) {
    ${DropdownMenu} {
      background: transparent;
      padding: 0.5rem 0 0;
    }

    ${SubMenuItem} {
      color: #fff;
      padding: 0.8rem 0;
      border-bottom: 1px solid #444;
      width: 100%;

    }

    ${SubMenu} a {
      display: block;
      padding: 0.5rem 1rem;
      color: #ddd !important;
      text-decoration: none;
      font-size: 0.95rem;
    }

    ${SubMenu} a:hover {
      background: #333;
      border-radius: 4px;
      color: #fff !important;
    }

    ${SubMenu} {
      background: #1f1f1f;
      padding-left: 0.5rem;
      border-left: 2px solid #555;
      margin-top: 0.5rem;
    }
  }
`;

// === Navbar Komponent === //

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (name) => {
    if (activeSubMenu === name) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(name);
    }
  };

  const handleMenuToggle = () => {
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
      <MobileFix>
        <NavLinks open={menuOpen}>
          <NavItem>
            <Link href="/">Bosh sahifa</Link>
          </NavItem>

          <NavItem>
            <a onClick={(e) => e.preventDefault()}>Mahsulotlar</a>
            <DropdownMenu open={menuOpen}>
              <SubMenuItem onClick={() => toggleSubMenu('qurilish')}>
                <span>Qurilish mahsulotlari</span>
                <SubMenu open={activeSubMenu === 'qurilish'}>
                  <Link href="/maxsulotlar/qurilishlar/havoza">Havoza</Link>
                  <Link href="/maxsulotlar/qurilishlar/manalitLesa">
                    Manalit havoza
                  </Link>
                  <Link href="/maxsulotlar/qurilishlar/manalitStoyka">
                    Manalit ustun
                  </Link>
                </SubMenu>
              </SubMenuItem>

              <SubMenuItem onClick={() => toggleSubMenu('temir')}>
                <span>Temir mahsulotlari</span>
                <SubMenu open={activeSubMenu === 'temir'}>
                  <Link href="/maxsulotlar/panjaralar/darvoza">Darvoza</Link>
                  <Link href="/maxsulotlar/panjaralar/panjara">Panjara</Link>
                  <Link href="/maxsulotlar/panjaralar/perilla">Perilla</Link>
                  <Link href="/maxsulotlar/panjaralar/soyabon">Soyabon</Link>
                  <Link href="/maxsulotlar/panjaralar/boshqalar">
                    Boshqalar
                  </Link>
                </SubMenu>
              </SubMenuItem>
            </DropdownMenu>
          </NavItem>

          <NavItem>
            <Link href="/components/galereya">Galereya</Link>
          </NavItem>
          <NavItem>
            <Link href="/components/contact">Biz haqimizda</Link>
          </NavItem>
          <NavItem>
            <Link href="/components/contact">Bog'lanish</Link>
          </NavItem>
        </NavLinks>
      </MobileFix>
    </Nav>
  );
};

export default Navbar;
