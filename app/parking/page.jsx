'use client'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ThinProgressBar from '@components/ThinProgressBar';

const HomeContainer = styled.div`  
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;    
`;

const firstTitle = {  
  marginTop: '27px',
  marginBottom: '13px',
  fontSize: '30px',
  
}
const secondTitle = {
  marginBottom: '25px',
  marginTop: '125px',
  fontSize: '25px'
}

const Title = styled.h1` 
  font-weight: 900;
  letter-spacing: 0.4px;
  ${(props) => (props.$titleOrder ==='second' ? secondTitle : firstTitle )}
  color: #303189;

  span {
    display: block;
    margin-top: -7px;
    text-align: center;
    font-weight:400;
    font-size:30
  }
`;

const Button = styled.button`
  ${(props) => (props.$buttonOrder === 'second' ? {marginTop:'50px'} : {marginTop:'33px'})}
  background-color: #000;
  color: #ffffff;
  border: none;
  padding: 8px;
  border-radius: 30px;
  width: 274px;
  height: 45px;
  cursor: pointer;
  z-index: 2;
`;

const StyledImage = styled.img`
  width: 374px;
  height: 300px;
  object-fit: cover;
`;

const HorizontalImage = styled.div`

  flex: 0 0 auto;
  margin-right: 10px;
  position: relative;
  width: ${(props) => (props.$isMiddle ? '47%' : '41%')};
  height: ${(props) => (props.$isMiddle ? '3%' : '60%')};
  margin-left: ${(props) => (props.$isMiddle ? '20px' : '0px')}; 
  margin-right: ${(props) => (props.$isMiddle ? '20px' : '0px')}; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 8px;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    z-index: 2;
    border-radius: 8px;
  }

  .overlay-content {
    position: absolute;
    bottom: 9px;
    left: 10px;    
    color: white;
    z-index: 3;    
    width: calc(100% - 40px);
  }

  .title {    
    font-size: ${props => props.$isMiddle ? '22px' : '18px'} ;
    font-weight: 900;  
  }

  .text {
    font-size: ${props => props.$isMiddle ? '14px' : '12px'} ;
    font-weight: 300;
  }
  img {
    width: ${(props) => (props.$isMiddle ? '196px' : '172px')};
    height: ${(props) => (props.$isMiddle ? '262px' : '230px')};
  }
  
`;

const HorizontalScrollContainer = styled.div`
  width:414px;  
  display: flex;
  align-items:center;
  overflow-x: auto;
  margin-top: 20px;

  /* Hide scrollbar indicator in WebKit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }
`;




const SecondHome = () => {


  return (
    <HomeContainer>
      <Title>PARKING GRATUIT<span >1 HEURE</span></Title>      

      <StyledImage src="/assets/gray.jpeg" alt="Your Image Alt Text" />
    
      <Title $titleOrder={'second'}>ÉVÉNEMENTS TENDANCE</Title>

      <HorizontalScrollContainer>
        <HorizontalImage $isMiddle={false}>
          <img src="/assets/mall.png" alt="Description" />
            <div className="overlay-content">
            <div className="title">LOREM IPSUM</div>
            <div className="text">20 Oct - 25 Nov</div>
          </div>
        </HorizontalImage>
        <HorizontalImage $isMiddle={true}>
          <img src="/assets/mall.png" alt="Description" />
          <div className="overlay-content">
            <div className="title">LOREM IPSUM</div>
            <div className="text">20 Oct - 25 Nov</div>
          </div>
        </HorizontalImage>
        <HorizontalImage $isMiddle={false}>        
          <img src="/assets/mall.png" alt="Description" />
          <div className="overlay-content">
            <div className="title">LOREM IPSUM</div>
            <div className="text">20 Oct - 25 Nov</div>
          </div>
        </HorizontalImage>        
      </HorizontalScrollContainer>

      <Button $buttonOrder={'second'} >
        <span style={{fontWeight:400, fontSize:'18px'}}>Voir tous les événements</span>
      </Button>
    </HomeContainer>
  );
};

export default SecondHome;
