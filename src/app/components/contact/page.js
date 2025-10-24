// "use client";
// import React from "react";
// import styled from "styled-components";
// import { Phone, Mail, MapPin } from "lucide-react";


// // === STYLES ===
// const Wrapper = styled.div`
//   padding: 5rem 2rem;
//   background: linear-gradient(180deg, #0d0d0d, #1a1a1a);
//   color: #f2f2f2;
//   font-family: "Poppins", sans-serif;
// `;

// const Section = styled.div`
//   text-align: center;
//   margin-bottom: 4rem;
// `;

// const Title = styled.h1`
//   font-size: 2.8rem;
//   color: #facc15;
//   margin-bottom: 1rem;
//   letter-spacing: 1px;
// `;

// const Subtitle = styled.h2`
//   font-size: 1.5rem;
//   margin-bottom: 1.5rem;
//   color: #e2e8f0;
// `;

// const Text = styled.p`
//   max-width: 800px;
//   margin: 0 auto;
//   line-height: 1.8;
//   font-size: 1.1rem;
//   color: #d1d5db;
// `;

// const Grid = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//   margin-bottom: 4rem;
// `;

// const Card = styled.div`
//   background: #222;
//   border-radius: 1.2rem;
//   padding: 2rem;
//   box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 0 25px rgba(250, 204, 21, 0.3);
//   }

//   h3 {
//     font-size: 1.4rem;
//     margin-bottom: 0.8rem;
//     color: #facc15;
//   }

//   p {
//     color: #e5e7eb;
//     line-height: 1.6;
//   }
// `;

// const ContactBox = styled.div`
//   margin-top: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
// `;

// const ContactItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;
//   color: #f2f2f2;
//   font-size: 1.1rem;

//   svg {
//     color: #facc15;
//   }
// `;


// const AboutPage = () => {
//   return (
//     <Wrapper>
//       <Section>
//         <Title>Biz haqimizda</Title>
//         <Subtitle>12 yillik tajriba — har bir zarbada ustalik va ishonch.</Subtitle>
//         <Text>
//           <strong>“Temirchi”</strong> — temirdan san'at yaratadigan jamoa. 
//           Biz 12 yildan beri temir va qurilish mahsulotlarini ishlab chiqarish,
//           o'rnatish va mijozlar ishonchini qozonish yo'lida faoliyat yuritamiz. 
//           Har bir buyum — bu aniqlik, bardoshlilik va estetik go'zallik uyg'unligi.
//         </Text>
//       </Section>

//       <Grid>
//         <Card>
//           <h3>Darvozalar</h3>
//           <p>
//             Har bir darvoza — bu ishonch, xavfsizlik va did uyg'unligi. 
//             Mustahkam metall, zamonaviy dizayn va sizning xohishingizga mos yechim.
//           </p>
//         </Card>

//         <Card>
//           <h3>Perilalar</h3>
//           <p>
//             Estetik ko'rinish va xavfsizlikni birlashtirgan perilalar – 
//             har bir binoga nafislik baxsh etadi. Har bir model aniq o'lchov va mukammallik bilan yaratiladi.
//           </p>
//         </Card>

//         <Card>
//           <h3>Panjaralar</h3>
//           <p>
//             Mustahkam va ishonchli panjaralar – xavfsizlikning birinchi qadami.
//             Har bir panjara o'ziga xos naqsh va sifat bilan ajralib turadi.
//           </p>
//         </Card>

//         <Card>
//           <h3>Naveslar</h3>
//           <p>
//             Yomg'ir va quyoshdan himoya qiluvchi naveslar –
//             tashqi muhitga chidamli va dizayni bilan ajralib turadi.
//           </p>
//         </Card>

//         <Card>
//           <h3> Qurilish ustunlari (Manalit, Havoza, Stoyka)</h3>
//           <p>
//             Qurilishda ishonchli tayanch – bu sifatli konstruktsiya. 
//             Bizning manalit stoykalar, havoza va lesalar xavfsizlik, mustahkamlik va qulaylikni kafolatlaydi.
//           </p>
//         </Card>

//         <Card>
//           <h3>Temirdan yasalgan buyumlar</h3>
//           <p>
//             Har bir buyum – bu temirdan yaratilgan san'at asari. 
//             Mayda detallargacha e'tibor, mustahkamlik va uzoq yillik xizmat — bizning farqimiz.
//           </p>
//         </Card>
//       </Grid>

//       <Section>
//         <Subtitle>Biz bilan bog'laning</Subtitle>
//         <Text>
//           Sizga kerakli mahsulotni topdingizmi? 
//           Biz bilan bog'laning — sizning buyurtmangizni o'lcham, dizayn va muddatga qarab 
//           individual tarzda tayyorlab beramiz.  
//         </Text>

//         <ContactBox>
//           <ContactItem>
//             <Phone /> <span>+998 90 995 20 00</span>
//           </ContactItem>
//           <ContactItem>
//             <Mail /> <span>temirchiozbekmilliybrendi@gmail.com</span>
//           </ContactItem>
//           <ContactItem>
//             <MapPin /> <span>Toshkent, Nazarbek</span>
//           </ContactItem>
//         </ContactBox>
//       </Section>
//     </Wrapper>
//   );
// };

// export default AboutPage;



"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Phone, Mail, MapPin, X } from "lucide-react";

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

const MapContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
  position: relative;

  iframe {
    width: 90%;
    height: 250px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  iframe:hover {
    transform: scale(1.02);
  }
`;

const MapModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const MapContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(250, 204, 21, 0.3);

  iframe {
    width: 100%;
    height: 500px;
    border: none;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #facc15;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ffe44d;
  }

  svg {
    color: #000;
  }
`;

const AboutPage = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <Wrapper>
      {/* === BIZ HAQIMIZDA === */}
      <Section>
        <Title>Biz haqimizda</Title>
        <Subtitle>12 yillik tajriba — har bir zarbada ustalik va ishonch.</Subtitle>
        <Text>
          <strong>“Temirchi”</strong> — temirdan san'at yaratadigan jamoa.
          12 yillik tajribamiz davomida biz metall va qurilish mahsulotlarini
          ishlab chiqarish, o‘rnatish va mijozlar ishonchini qozonish yo‘lida
          faoliyat yuritamiz. Har bir mahsulot — bu aniqlik, bardoshlilik va
          estetik go‘zallik uyg‘unligi.
        </Text>
      </Section>

      {/* === MAHSULOTLAR === */}
      <Grid>
        <Card>
          <h3>Darvozalar</h3>
          <p>
            Mustahkam, xavfsiz va dizayni bilan ajralib turuvchi darvozalar — 
            har bir uyning ishonchli himoyachisi.
          </p>
        </Card>

        <Card>
          <h3>Perilalar</h3>
          <p>
            Estetik va mustahkam perilalar — xavfsizlik va go‘zallikni uyg‘unlashtiradi.
          </p>
        </Card>

        <Card>
          <h3>Panjaralar</h3>
          <p>
            Panjaralarimiz nafaqat himoya, balki har bir inshootga nafislik baxsh etadi.
          </p>
        </Card>

        <Card>
          <h3>Naveslar</h3>
          <p>
            Har qanday ob-havoda himoya beruvchi naveslar — dizayn va mustahkamlik uyg‘unligi.
          </p>
        </Card>

        <Card>
          <h3>Qurilish tayanchlari</h3>
          <p>
            Manalit, havoza, stoyka va lesalar — qurilishda ishonchli poydevor. 
            Sifat va barqarorlik bizning ustuvor maqsadimiz.
          </p>
        </Card>

        <Card>
          <h3>Temir buyumlar</h3>
          <p>
            Har bir temir buyum — bu qo‘l mehnati va san’atning mukammal uyg‘unligi.
          </p>
        </Card>
      </Grid>

      {/* === BOG‘LANISH VA XARITA === */}
      <Section>
        <Subtitle>Biz bilan bog‘laning</Subtitle>
        <Text>
          Sizga kerakli mahsulotni tanladingizmi? Biz bilan bog‘laning — 
          o‘lcham, dizayn va muddat bo‘yicha individual yechim tayyorlab beramiz.
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

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.234753573066!2d69.13765417595585!3d41.2994952713134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b123456789%3A0xabcdef123456789!2sNazarbek%2C%20Tashkent!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            loading="lazy"
            onClick={() => setIsMapOpen(true)}
          ></iframe>
        </MapContainer>
      </Section>

      {isMapOpen && (
        <MapModal>
          <MapContent>
            <CloseBtn onClick={() => setIsMapOpen(false)}>
              <X />
            </CloseBtn>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.234753573066!2d69.13765417595585!3d41.2994952713134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b123456789%3A0xabcdef123456789!2sNazarbek%2C%20Tashkent!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </MapContent>
        </MapModal>
      )}
    </Wrapper>
  );
};

export default AboutPage;
