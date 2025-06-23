// import React from 'react';
import Image from 'next/image';
// const Header = () => {
//   return (
//     <div>
//       <div style={{ fontWeight: 'bold', fontSize: '40px' }}>DOREBOOKS 공고 페이지</div>
//       <div style = {{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//         <div >
//           <div>
//             Dorebooks는 공급자와 소비자 모두가 만족할 수 있는 전자책 중고거래 플랫폼을 제공하며, 이를 통해 새로운 전자책 시장을 주도합니다.
//           </div>
//           <div>
//             새로운 전자책 시장의 “도래”를 함께할 여러분들을 환영합니다!
//           </div>
//           <div>
//             공고 보기 버튼
//           </div>
//         </div>
//         <Image
//           src="/images/1.webp"
//           alt="Dorebooks Logo"
//           width={200}
//           height={100}
//         />
//       </div>
//     </div>
//   )
// }
// const Home = () => {
//   return (
//     <div style = {{ justifySelf : 'center',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width : '50vw'}}>
//       <Header />
//     </div>
//   )
// }


// export default Home;


import React, { useState } from 'react';
import styled from 'styled-components';

// Placeholder imports for images - replace with actual local paths
import ContactImage from '../public/images/1.webp';

// Styled components definitions
const AppContainer = styled.div`  
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45vw;
  justify-self: center;
`;

const LogoTitle = styled.div`  
  
`;

const Description = styled.div`  
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  p {
    margin-bottom: 16px;
  }
`;

const Button = styled.button`  
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid rgba(55,53,47,0.16);
  background: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

const Section = styled.section`  
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 16px;
`;

const SectionTitle = styled.h2`  
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Divider = styled.hr`  
  border: none;
  height: 1px;
  background: rgba(84,72,49,0.15);
  margin: 16px 0;
`;

const TwoColumn = styled.div`  
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const Column = styled.div`  
  flex: 1 1 300px;
`;

const SectionImage = styled.img`  
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const ContactInfo = styled.div`  
  line-height: 1.6;
  p {
    margin: 8px 0;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 50%;
  height: 60%;
  background: #fff;
  border-radius: 8px;
  position: relative;
  padding: 24px;
  overflow-y: auto;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
// Modal Component
function Modal({ isOpen, onClose, children } : ModalProps) {
  if (!isOpen) return null;
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalClose onClick={onClose}>&times;</ModalClose>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
}

// Main App component
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContainer>
      {/* Logo and Title */}
        <h1 style = {{fontSize : 40}}>DOREBOOKS 공고 페이지</h1>

      {/* Description and Button */}
      <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <Description>
          <p>Dorebooks는 공급자와 소비자 모두가 만족할 수 있는 전자책 중고거래 플랫폼을 제공하며, 이를 통해 새로운 전자책 시장을 주도합니다.</p>
          <p>새로운 전자책 시장의 “도래”를 함께할 여러분들을 환영합니다!</p>
          <Divider />
          <Button onClick = {handleButtonClick}>
            <img src="/images/archive_green.svg" alt="Archive Icon" />
            공고 보기
          </Button>
          <Divider />
        </Description>
        <Image src = {"/images/1.webp"} alt="Dorebooks Logo" width={300} height={300} style={{ marginTop: '20px', marginLeft : 40 }} />
      </div>


      {/* Company Introduction Section */}
      <Section>
        <SectionTitle>회사 소개</SectionTitle>
        <Divider />
        <TwoColumn>
          <Column>
            <SectionImage src='/images/company_image.png' alt="회사 소개 이미지" />
          </Column>
          <Column>
            <p>전자책을 중고거래 할 수는 없을까? 모든 것은 하나의 질문에서 시작되었습니다. 독자의 입장에서 전자책은 다 읽고 나면 실체도 없이 계정에만 남아있을 뿐입니다.</p>
            <p>출판사와 작가 입장에서도 종이 중고책이 무제한으로 융통되고, 전자책 구독모델이 확대됨에 따라 이윤 감소로 어려움을 겪고 있습니다.</p>
            <p>그렇다면 독자들이 “열람시간”을 정하여 전자책을 구매하고, 주어진 시간 내에서 자유롭게 독서 후 남은 열람시간을 중고거래 하게 만든다면 독자와 출판사 그리고 작가 모두의 니즈를 만족하지 않을까?</p>
            <p>Booket은 독자들에게 보다 합리적인 가격에 전자책 소비가 가능하게 하고, 출판사와 작가에게도 이윤을 보장하는, 모두가 상생할 수 있는 플랫폼을 꿈꾸며 시작한 것입니다.</p>
          </Column>
        </TwoColumn>
      </Section>

      {/* Publisher Contact Section */}
      <Section>
        <SectionTitle>출판사 측 연락 페이지</SectionTitle>
        <Divider />
        <TwoColumn>
          <Column>
            <ContactInfo>
              <p>Booket은 출판사와의 상생을 추구합니다. Booket에서 공급되는 전자책은 출판사 측에서 설정한 “열람시간 및 양도횟수제한”을 준수합니다.</p>
              <p>또한 전자책 중고거래가 시장에 처음 등장하는 개념인만큼, 투명하게 중고거래 내역을 공유 드립니다.</p>
              <p>T. 010-xxxx-xxxxx</p>
              <p>E. ysu0906@korea.ac.kr</p>
            </ContactInfo>
          </Column>
          <Column>
            <SectionImage src='/images/contact_us.png' alt="Contact Us Image" />
          </Column>
        </TwoColumn>
      </Section>

      <SectionTitle>채용공고</SectionTitle>
      <Description>
        <Divider />
        <div style = {{ display: 'flex', flexDirection: 'row', justifyContent : 'center',alignItems: 'center', width: '100%' }}>
          <p>현재 채용중인 포지션이 없습니다. 추후에 다시 확인 부탁드립니다.</p>
          <Image src="/images/no_job.png" alt="No Jobs Available" width={300} height={200} style = {{margin:50}}/>
        </div>
      </Description>

      <Section>
        <SectionTitle>IR</SectionTitle>
        <Divider />
        <TwoColumn>
          <Column>
            <ContactInfo>
              <p>Dorebooks은 주주와 기업 간 상생의 거버넌스를 추구합니다.</p>
              <p>주주보호 및 기업가치 제고를 위한 Dorebooks의 노력을 이 곳에서 확인할 수 있습니다.</p>
            </ContactInfo>
          </Column>
          <Column>
            <SectionImage src='/images/contact_us.png' alt="Contact Us Image" />
          </Column>
        </TwoColumn>
      </Section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SectionTitle>채용공고</SectionTitle>
        <Description>
          <Divider />
          <div style = {{ display: 'flex', flexDirection: 'row', justifyContent : 'center',alignItems: 'center', width: '100%' }}>
            <p>현재 채용중인 포지션이 없습니다. 추후에 다시 확인 부탁드립니다.</p>
            <Image src="/images/no_job.png" alt="No Jobs Available" width={300} height={200} style = {{margin:50}}/>
          </div>
        </Description>  
      </Modal>
    </AppContainer>
  );
}
