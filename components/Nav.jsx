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

const Image = styled.img`
  width: 50px;
  height: 50px;
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

const NavButton = ({ onClick, $isActive, children }) => {
  const buttonStyles = {
    border: 'none',
    padding: '10px 12px 8px 20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '30px',
    width: '123px',
    height: '45px',
    ...($isActive ? activeBgStyles : inactiveBgStyles),
  };

  return (
    <button onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  );
};


const Nav = () => {
  const [activeButton, setActiveButton] = useState('Magasins');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <LogoBarContainer>
        <LogoBar>
          <div style={{ width:'30%'}}>
            <div style={{ display: 'inline-block', marginRight:50, marginTop:9 }}>
              <PiDotsThreeVerticalBold color='#303189' size={45} />
            </div>
          </div>

          <div style={{ width:'30%', paddingTop:14, paddingLeft:17}}>
            <img src="/assets/logo.png" alt="" width={90} height={90}/>
          </div>

          <div style={{ width:'30%', display: 'flex', alignItems: 'center' ,paddingLeft:27, paddingBottom:3}}>            
            <LiaSearchSolid size={24} color='#303189' style={{ marginRight: '10px' }} />
            <Image src="/assets/qrcode.png" alt="Your Image Alt Text"  />
          </div>

        </LogoBar>
      </LogoBarContainer>

      <NavBarContainer>
        <NavBar>
          <NavButton onClick={() => handleButtonClick("Magasins")} $isActive={activeButton === "Magasins"}>
            
            <div style={activeButton === "Magasins" ? activeTxtStyles : inactiveTxtStyles} >
              <FaBagShopping size={13} style={activeButton === "Magasins" ? activeTxtStyles : inactiveTxtStyles} />
            </div>
            <span style={{ marginLeft: 6, fontSize: 14, fontWeight: 300, ...(activeButton === "Magasins" ? activeTxtStyles : inactiveTxtStyles) }}>
              Magasins
            </span>
          </NavButton>

          <NavButton onClick={() => handleButtonClick("Restauration")} $isActive={activeButton === "Restauration"}>
            
            <div style={activeButton === "Restauration" ? activeTxtStyles : inactiveTxtStyles} >
              <RiRestaurant2Fill size={16} style={activeButton === "Restauration" ? activeTxtStyles : inactiveTxtStyles} />
            </div>
            <span style={{ marginLeft: 6, fontSize: 14, fontWeight: 300, ...(activeButton === "Restauration" ? activeTxtStyles : inactiveTxtStyles) }}>
              Restauration
            </span>
          </NavButton>

          <NavButton onClick={() => handleButtonClick("Informations")} $isActive={activeButton === "Informations"}>
            <div style={activeButton === "Informations" ? activeTxtStyles : inactiveTxtStyles} >
              <RiInformationFill size={13} />
            </div>            
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
