'use client'


import styled from 'styled-components';
import { FaCarAlt } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import {useState} from 'react'
import { useRouter } from 'next/navigation';

const StyledBottomNav = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  height:67px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;  // Corrected property name   
  border-top-left-radius: 68px;  // Adjust the border radius as needed
  border-top-right-radius: 68px; // Adjust the border radius as needed
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
  z-index:100;
  margin-bottom:50;
`;


const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 67px;
  width: 414px;        
  padding:16px 12px 16px 27px
`;

const Icon = styled.div`
  color: #303189; /* Icon color set to white */
`;

const NavButton = styled.button`
  background-color: ${(props) => (props.$isActive ? '#EAEAF3' : 'white')} ;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  width: 104px;
  height: 37px;  
`;

const ButtonText = styled.span`
  margin-left:8px;  
  font-size:14px;  
  font-weight:400;
  color:#303189
`;


const BottomNav = () => {

  const [activeButton, setActiveButton] = useState('Acceuil');

  const router = useRouter()

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    if(buttonName==='Parking'){
      router.push('/parking')
    }

    if(buttonName==='Acceuil'){
      router.push('/')
    }
  };
  

  return (
    <StyledBottomNav>
      <NavBar>
          <NavButton onClick={() => handleButtonClick("Acceuil")} $isActive={activeButton === "Acceuil"}>
            <Icon>
              <IoMdHome size={23} />
            </Icon>
            {activeButton === 'Acceuil' && <ButtonText>Accueil</ButtonText>}
          </NavButton>

          <NavButton onClick={() => handleButtonClick("Parking")} $isActive={activeButton === "Parking"}>
            <Icon>
              <FaCarAlt size={21} />
            </Icon>
            {activeButton === 'Parking' && <ButtonText>Parking</ButtonText>}
          </NavButton>

          <NavButton onClick={() => handleButtonClick("Profil")} $isActive={activeButton === "Profil"} >
            <Icon>
              <FaUserAlt size={21} />
            </Icon>
            {activeButton === 'Profil' && <ButtonText>Profil</ButtonText>}
          </NavButton>
        </NavBar>
    </StyledBottomNav>
  );
};

export default BottomNav;
