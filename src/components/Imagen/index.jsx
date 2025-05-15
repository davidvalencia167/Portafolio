import styled from "styled-components";
import { useState, useEffect } from "react";
import davidImg from "../../assets/david.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: 480px) {
    margin-top: -20px;
  }
  
  @media (max-width: 360px) {
    margin-top: -30px;
  }
`;

const BackgroundSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  background-image: url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/NEFgTaHM4W/d4udwm54_expires_30_days.png');
  background-size: 66%;
  background-position: right center;
  background-repeat: no-repeat;
  height: 877px;

  @media (max-width: 1200px) {
    background-size: 80%;
    height: 700px;
  }

  @media (max-width: 992px) {
    background-size: 60% 100%;
    height: 877px;
  }

  @media (max-width: 768px) {
    background-size: 54% 100%;
    height: 700px;
  }

  @media (max-width: 576px) {
    height: 400px;
    background-size: 60% 100%;
  }

  @media (max-width: 480px) {
    height: 350px;
    background-size: 70% 100%;
    background-position: right bottom;
  }

  @media (max-width: 360px) {
    height: 300px;
    background-size: 80% 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  align-self: stretch;
`;

const DavidImage = styled.img`
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 629px;
  object-fit: contain;

  @media (max-width: 1200px) {
    width: 350px;
    height: 550px;
    left: 75%;
  }

  @media (max-width: 992px) {
    width: 300px;
    height: 470px;
    left: 80%;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 400px;
    left: 80%;
    top: 40%;
  }

  @media (max-width: 576px) {
    width: 200px;
    height: 315px;
    left: 75%;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 250px;
    left: 70%;
    top: 50%;
  }

  @media (max-width: 360px) {
    width: 130px;
    height: 200px;
    left: 68%;
  }
`;

const Imagen = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // Check initially
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <Container>
      <BackgroundSection>
        <DavidImage 
          src={davidImg} 
          alt="David" 
          loading="lazy"
        />
        <Content/>
      </BackgroundSection>
    </Container>
  );
};

export default Imagen;