import styled from "styled-components";
import { useState, useEffect } from "react";

const PresentacionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 200px 60px;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;

  @media (max-width: 992px) {
    padding: 160px 40px;
  }

  @media (max-width: 768px) {
    padding: 140px 30px;
  }  @media (max-width: 480px) {
    position: relative;
    padding: 100px 0 40px 20px;
    height: auto;
    min-height: 55vh;
    width: 60%;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 0;
    z-index: 2;
  }
  
  @media (max-width: 400px) {
    padding: 95px 0 40px 18px;
    width: 62%;
    min-height: 53vh;
  }
  
  @media (max-width: 360px) {
    padding: 90px 0 40px 16px;
    width: 65%;
    min-height: 50vh;
  }
`;

const Role = styled.span`
  color: #fdc435;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
    @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 10px;
    align-self: flex-start;
  }
`;

const Title = styled.h1`
  color: #25282b;
  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
    @media (max-width: 480px) {
    font-size: 28px;
    text-align: left;
    align-self: flex-start;
  }
  
  @media (max-width: 360px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  color: #828282;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  max-width: 480px;
  margin: 24px 0;

  @media (max-width: 992px) {
    font-size: 16px;
    max-width: 350px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    max-width: 300px;
  }
    @media (max-width: 480px) {
    font-size: 13px;
    max-width: 95%;
    margin: 16px 0;
    text-align: left;
  }
  
  @media (max-width: 360px) {
    font-size: 12px;
    margin: 12px 0;
    max-width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 14px;
  }

  @media (max-width: 360px) {
    gap: 8px;
    margin-top: 10px;
  }
`;

const Button = styled.a`
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 18px;
    font-size: 14px;
    text-align: center;
    min-width: 100px;
  }

    @media (max-width: 360px) {
    padding: 8px 14px;
    font-size: 13px;
    min-width: 90px;
  }
`;

const ButtonPrimary = styled(Button)`
  background-color: #fdc435;
  color: #25282b;
  border: none;

  &:hover {
    background-color: #f5b82e;
  }

  @media (max-width: 480px) {
    border-radius: 50px;
    padding: 12px 22px;
    font-size: 14px;
    
    &:active {
      background-color: #f5b82e;
    }
  }
  
  @media (max-width: 360px) {
    padding: 10px 18px;
    font-size: 13px;
  }
`;

const ButtonSecondary = styled(Button)`
  background-color: transparent;
  color: #25282b;
  border: 2px solid #25282b;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 480px) {
    border-radius: 50px;
    padding: 10px 20px; /* Ajustamos el padding para compensar el borde */
    font-size: 14px;
    
    &:active {
      background-color: #f0f0f0;
    }
  }
  
@media (max-width: 360px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

const Presentacion = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // Configuración inicial
    handleResize();
    
    // Agregar event listener para el evento de cambio de tamaño
    window.addEventListener('resize', handleResize);
    
    // Limpieza al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <PresentacionWrapper>
      <Role>Web Developer</Role>
      <Title>Hello, my name is David</Title>
      <Description>
        {isMobile 
          ? "I am a passionate professional with a solid background in technology and software development."
          : "I am a passionate professional with a solid background in technology and software development. Over the years, I've honed my skills in various areas, always striving to learn, innovate, and share knowledge."
        }
      </Description>
      <ButtonGroup>
        <ButtonPrimary href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</ButtonPrimary>
        <ButtonSecondary href="https://www.linkedin.com/in/david-santiago-valencia-16825b146/" target="_blank" rel="noopener noreferrer">LinkedIn</ButtonSecondary>
      </ButtonGroup>
    </PresentacionWrapper>
  );
};

export default Presentacion;