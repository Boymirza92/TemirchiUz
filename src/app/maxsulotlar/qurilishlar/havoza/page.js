'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// == STYLE == //
const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  Width: 100%;
  `;

const App = () => {
  return (
  <AppWrapper>
    <h1>Havoza sahifasi</h1>
  </AppWrapper>
  )
};

export default App;
