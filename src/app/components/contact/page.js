"use client";
import React from "react";
import styled from "styled-components";
import { Phone, Mail, MapPin } from "lucide-react";

// === STYLES ===
const Wrapper = styled.div`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #0d0d0d, #1a1a1a);
  color: #f2f2f2;
  font-family: "Poppins", sans-serif;
`;

const Section = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #facc15;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #e2e8f0;
`;

const Text = styled.p`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #d1d5db;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  margin-bottom: 4rem;
`;

const Card = styled.div`
  background: #222;
  border-radius: 1.2rem;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(250, 204, 21, 0.3);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    color: #facc15;
  }

  p {
    color: #e5e7eb;
    line-height: 1.6;
  }
`;

const ContactBox = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #f2f2f2;
  font-size: 1.1rem;

  svg {
    color: #facc15;
  }
`;

const AboutPage = () => {
  return (
    <Wrapper>
      <Section>
        <Title>Biz haqimizda</Title>
        <Subtitle>12 yillik tajriba — har bir zarbada ustalik va ishonch.</Subtitle>
        <Text>
          <strong>“Temirchi”</strong> — temirdan san'at yaratadigan jamoa.
          Biz 12 yildan beri temir va qurilish mahsulotlarini ishlab chiqarish,
          o'rnatish va mijozlar ishonchini qozonish yo'lida faoliyat yuritamiz.
          Har bir buyum — bu aniqlik, bardoshlilik va estetik go'zallik uyg'unligi.
        </Text>
      </Section>

      <Grid>
        <Card>
          <h3>Darvozalar</h3>
          <p>
            Har bir darvoza — bu ishonch, xavfsizlik va did uyg'unligi.
            Mustahkam metall, zamonaviy dizayn va sizning xohishingizga mos yechim.
          </p>
        </Card>

        <Card>
          <h3>Perilalar</h3>
          <p>
            Estetik ko'rinish va xavfsizlikni birlashtirgan perilalar –
            har bir binoga nafislik baxsh etadi. Har bir model aniq o'lchov va mukammallik bilan yaratiladi.
          </p>
        </Card>

        <Card>
          <h3>Panjaralar</h3>
          <p>
            Mustahkam va ishonchli panjaralar – xavfsizlikning birinchi qadami.
            Har bir panjara o'ziga xos naqsh va sifat bilan ajralib turadi.
          </p>
        </Card>

        <Card>
          <h3>Naveslar</h3>
          <p>
            Yomg'ir va quyoshdan himoya qiluvchi naveslar –
            tashqi muhitga chidamli va dizayni bilan ajralib turadi.
          </p>
        </Card>

        <Card>
          <h3> Qurilish ustunlari (Manalit, Havoza, Stoyka)</h3>
          <p>
            Qurilishda ishonchli tayanch – bu sifatli konstruktsiya.
            Bizning manalit stoykalar, havoza va lesalar xavfsizlik, mustahkamlik va qulaylikni kafolatlaydi.
          </p>
        </Card>

        <Card>
          <h3>Temirdan yasalgan buyumlar</h3>
          <p>
            Har bir buyum – bu temirdan yaratilgan san'at asari.
            Mayda detallargacha e'tibor, mustahkamlik va uzoq yillik xizmat — bizning farqimiz.
          </p>
        </Card>
      </Grid>

      <Section>
        <Subtitle>Biz bilan bog'laning</Subtitle>
        <Text>
          Sizga kerakli mahsulotni topdingizmi?
          Biz bilan bog'laning — sizning buyurtmangizni o'lcham, dizayn va muddatga qarab
          individual tarzda tayyorlab beramiz.
        </Text>

        <ContactBox>
          <ContactItem>
            <Phone /> <span>+998 90 995 20 00</span>
          </ContactItem>
          <ContactItem>
            <Mail /> <span>temirchiozbekmilliybrendi@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <MapPin /> <span>Toshkent, Nazarbek</span>
          </ContactItem>
        </ContactBox>
      </Section>
    </Wrapper>
  );
};

export default AboutPage;

