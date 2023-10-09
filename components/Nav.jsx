import styled from 'styled-components';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaBagShopping } from 'react-icons/fa6';
import { RiRestaurant2Fill,RiInformationFill } from 'react-icons/ri';
import { AiOutlineBook, AiOutlineRest } from 'react-icons/ai';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { LiaSearchSolid } from 'react-icons/lia';
import { ImQrcode } from 'react-icons/im';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import { useState } from 'react';


const LogoBarContainer = styled.div`
  display: flex;  
  justify-content: center;
  height: 68px;
  
`;

const LogoBar = styled.div`
  display: flex;
  justify-content: space-around;
  
  text-align: center;
  width: 100%;
`;

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 45px;
  width: 373px;
  
  border-radius: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const activeBgStyles = {
  backgroundColor: "#303189",
  color: "#ffffff",
};

const inactiveBgStyles = {
  backgroundColor: "#ffffff",
  color: "#303189",
};

const activeTxtStyles = {  
  color: "#ffffff",
};

const inactiveTxtStyles = {  
  color: "#909090",
};

// ... (other imports)

const NavButton = styled.button`
  border: none;
  padding: 10px 12px 8px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 30px;
  width: 123px;
  height: 45px;
  ${(props) => (props.$isActive ? activeBgStyles : inactiveBgStyles)};
`;

const Icon = styled.div`
  ${(props) => (props.$isActive ? activeTxtStyles : inactiveTxtStyles)};
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Nav = () => {
  const [activeButton, setActiveButton] = useState('Magasins');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      {/* ... (LogoBarContainer and LogoBar components) */}

      <NavBarContainer>
        <NavBar>
          <NavButton onClick={() => handleButtonClick("Magasins")} $isActive={activeButton === "Magasins"}>
            <Icon $isActive={activeButton === "Magasins"}>
              <FaBagShopping size={13} />
            </Icon>
            <span style={{ marginLeft: 6, fontSize: 14, fontWeight: 300, ...(activeButton === "Magasins" ? activeTxtStyles : inactiveTxtStyles) }}>
              Magasins
            </span>
          </NavButton>

          <NavButton onClick={() => handleButtonClick("Restauration")} $isActive={activeButton === "Restauration"}>
            <Icon $isActive={activeButton === "Restauration"}>
              <RiRestaurant2Fill size={16} />
            </Icon>
            <span style={{ marginLeft: 6, fontSize: 14, fontWeight: 300, ...(activeButton === "Restauration" ? activeTxtStyles : inactiveTxtStyles) }}>
              Restauration
            </span>
          </NavButton>

          <NavButton onClick={() => handleButtonClick("Informations")} $isActive={activeButton === "Informations"}>
            <Icon $isActive={activeButton === "Informations"}>
              <RiInformationFill size={13} />
            </Icon>
            <span style={{ marginLeft: 6, fontSize: 14, fontWeight: 300, ...(activeButton === "Informations" ? activeTxtStyles : inactiveTxtStyles) }}>
              Informations
            </span>
          </NavButton>
        </NavBar>
      </NavBarContainer>
    </>
  );
};

export default Nav;

