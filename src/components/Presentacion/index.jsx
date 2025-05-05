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
`;

const Role = styled.span`
  color: #fdc435;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  color: #25282b;
  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`;

const Description = styled.p`
  color: #828282;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  max-width: 480px;
  margin: 24px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const ButtonPrimary = styled.a`
  background-color: #fdc435;
  color: #25282b;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
`;

const ButtonSecondary = styled.a`
  background-color: transparent;
  color: #25282b;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 24px;
  border: 2px solid #25282b;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
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
