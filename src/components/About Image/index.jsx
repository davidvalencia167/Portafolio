import styled from "styled-components";
import { useState, useEffect } from "react";
import davidImg from "../../assets/david.png";

const ContainerImage = styled.div`
  position: absolute;
  right: 120px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  @media (max-width: 992px) {
    right: 40px;
  }
  
  @media (max-width: 768px) {
    right: 30px;
  }
  
  @media (max-width: 480px) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    display: flex;
    justify-content: center;
    margin: 30px auto;
    width: 100%;
  }
  
  @media (max-width: 360px) {
    margin: 20px auto;
  }
`;

const BackgroundSection = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #FDC435;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 992px) {
    width: 350px;
    height: 350px;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 360px) {
    width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  object-position: center;
  transform: scale(1.05);
  
  @media (max-width: 480px) {
    transform: scale(1.02);
  }
  
  @media (max-width: 360px) {
    transform: none;
  }
`;

const AboutImage = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // Verificación inicial
    checkMobile();
    
    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkMobile);
    
    // Limpiar listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <ContainerImage>
      <BackgroundSection>
        <Image 
          src={davidImg} 
          alt="David" 
          loading="lazy" 
        />
      </BackgroundSection>
    </ContainerImage>
  );
}

export default AboutImage;