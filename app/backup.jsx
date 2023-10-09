'use client'
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThinProgressBar from '@components/ThinProgressBar';

const HomeContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const firstTitle = {
  marginBottom: '45px',
  marginTop: '7px',
  fontSize: '31px'
}
const secondTitle = {
  marginBottom: '25px',
  marginTop: '52px',
  fontSize: '25px'
}

const Title = styled.h1` 
  font-weight: 900;
  letter-spacing: 0.4px;
  ${(props) => (props.$titleOrder ==='second' ? secondTitle : firstTitle )}
  color: #303189;
`;

const Button = styled.button`
  margin-top: 33px;
  background-color: #303189;
  color: #ffffff;
  border: none;
  padding: 8px;
  border-radius: 30px;
  width: 274px;
  height: 45px;
  cursor: pointer;
  z-index: 2;
`;

const ImageWithOverlay = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    z-index: 2;
    border-radius: 8px;
  }

  .overlay-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    z-index: 3;
    text-align: center;
    width: calc(100% - 40px);
  }

  .title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .text {
    font-size: 16px;
    font-weight: 300;
  }
  
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
    height: 50%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    z-index: 2;
    border-radius: 8px;
  }

  .overlay-content {
    position: absolute;
    bottom: 20px;
    left: 20px;    
    color: white;
    z-index: 3;    
    width: calc(100% - 40px);
  }

  .title {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  .text {
    font-size: 14px;
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




const Home = () => {

  const [content, setContent] = useState(null)



  const router = useRouter();

  useEffect(() => {
    
    const createPrompt = async () => {
   

      try{
          const response = await fetch('https://apigenerator.dronahq.com/api/Fu2aiuqv/data')
          const data = await response.json()
          console.log(data[0])
      }catch (error){
          console.log(error )
      }
  }

  createPrompt()

}, []);




  return (
    <HomeContainer>
      <Title>THE PLACE TO BE</Title>

      <ImageWithOverlay>
        <img src="/assets/imageFeed.png" alt="Your Image Alt Text" />

        <div className="overlay-content">
          <div className="title">ANFAPLACE MALL</div>
          <div className="text">www.anfaplacemall.ma</div>

          <ThinProgressBar filled={false} />
        </div>
      </ImageWithOverlay>

      <Button onClick={() => router.push('/parking')}>
        <span style={{fontWeight:400, fontSize:'18px'}}>Voir toutes les actualités</span>
      </Button>

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

      <Button onClick={() => router.push('/parking')}>
        <span style={{fontWeight:500}}>Voir tous les actualites</span>
      </Button>
    </HomeContainer>
  );
};

export default Home;
