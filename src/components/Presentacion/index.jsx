import styled from "styled-components";

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

`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
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
`;

const ButtonPrimary = styled(Button)`
  background-color: #fdc435;
  color: #25282b;
  border: none;

  &:hover {
    background-color: #f5b82e;
  }
`;

const ButtonSecondary = styled(Button)`
  background-color: transparent;
  color: #25282b;
  border: 2px solid #25282b;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Presentacion = () => {
  return (
    <PresentacionWrapper>
      <Role>Web Developer</Role>
      <Title>Hello, my name is David</Title>
      <Description>
        I am a passionate professional with a solid background in technology and software development. Over the years, I've honed my skills in various areas, always striving to learn, innovate, and share knowledge. 
      </Description>
      <ButtonGroup>
        <ButtonPrimary href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</ButtonPrimary>
        <ButtonSecondary href="https://www.linkedin.com/in/david-santiago-valencia-16825b146/" target="_blank" rel="noopener noreferrer">LinkedIn</ButtonSecondary>
      </ButtonGroup>
    </PresentacionWrapper>
  );
};

export default Presentacion;