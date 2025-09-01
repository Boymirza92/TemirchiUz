import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Section from "./components/section/page"
import CardWrapper from "./components/cards/page";

export default function Home() {
  return (
    <div>
      <Section />
      <CardWrapper />
    </div>
  );
}
