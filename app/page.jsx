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
  marginBottom: '45px',
  marginTop: '27px',
  fontSize: '30px'
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
  ${(props) => (props.$buttonOrder === 'second' ? {marginTop:'50px'} : {marginTop:'33px'})}
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
    height: 35%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    z-index: 2;
    border-radius: 8px;
  }

  .overlay-content {
    position: absolute;
    bottom: 12px;
    left: 20px;
    color: white;
    z-index: 3;
    text-align: center;
    width: calc(100% - 40px);    
  }

  .title {
    font-size: 25px;
    font-weight: 700;    
  }

  .text {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 12px;
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




const Feed = () => {

  const [content, setContent] = useState(
    {
      page_title:'',
      cover_image:'',
      cover_title:'',
      cover_details:'',
      gallery_image:'',
      gallery_date:'',
      gallery_title:''
    }
  )


  useEffect(() => {
    
    const fetchData = async () => {
      try{
          const response = await fetch('https://apigenerator.dronahq.com/api/Fu2aiuqv/data')
          const data = await response.json()                    
          setContent(data[0])

      }catch (error){
          console.log(error )
      }
  }
  fetchData()

}, []);




  return (
    <HomeContainer>      

      <h1 style={{ marginBottom: '45px',marginTop: '27px',fontSize: '30px',fontWeight: 900, letterSpacing: '0.4px', color: '#303189' }}>
        {content.page_title}
      </h1>

      <ImageWithOverlay>
        <img src={content.cover_image} alt="Your Image Alt Text" />

        <div className="overlay-content">
          <div className="title">{content.cover_title}</div>
          <div className="text">{content.cover_details}</div>

          <ThinProgressBar filled={false} />
        </div>
      </ImageWithOverlay>

      <Button>
        <span style={{fontWeight:400, fontSize:'18px'}}>Voir toutes les actualités</span>
      </Button>

      <h1 style={{ marginBottom: '25px',marginTop: '52px',fontSize: '25px',fontWeight: 900, letterSpacing: '0.4px', color: '#303189' }}>
        ÉVÉNEMENTS TENDANCE
      </h1>

      <HorizontalScrollContainer>
        <HorizontalImage $isMiddle={false}>
          <img src={content.gallery_image} alt="Description" />
            <div className="overlay-content">
            <div className="title">{content.gallery_title}</div>
            <div className="text">{content.gallery_date}</div>
          </div>
        </HorizontalImage>
        <HorizontalImage $isMiddle={true}>
          <img src={content.gallery_image} alt="Description" />
          <div className="overlay-content">
            <div className="title">{content.gallery_title}</div>
            <div className="text">{content.gallery_date}</div>
          </div>
        </HorizontalImage>
        <HorizontalImage $isMiddle={false}>        
          <img src={content.gallery_image} alt="Description" />
          <div className="overlay-content">
            <div className="title">{content.gallery_title}</div>
            <div className="text">{content.gallery_date}</div>
          </div>
        </HorizontalImage>        
      </HorizontalScrollContainer>

      <Button $buttonOrder={'second'} >
        <span style={{fontWeight:400, fontSize:'18px'}}>Voir tous les événements</span>
      </Button>
    </HomeContainer>
  );
};

export default Feed;
