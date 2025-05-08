import styled from "styled-components";

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 120px;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  max-width: 50%;

  @media (max-width: 992px) {
    padding: 60px;
    max-width: 70%;
  }

`;

const AboutTitle = styled.h1`
  color: #25282b;
  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #fdbb30;
    margin: 15px 0 25px 0;
  }

  @media (max-width: 992px) {
    font-size: 36px;
    
    &::after {
      margin: 12px auto 20px;
    }
  }

`;

const AboutDescription = styled.p`
  color: #828282;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  max-width: 100%;
  margin: 0 0 30px 0;
  line-height: 1.7;

  @media (max-width: 992px) {
    font-size: 16px;
    max-width: 90%;
  }

`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

`;

const ButtonPrimary = styled.a`
  background-color: #fdc435;
  color: #25282b;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(253, 196, 53, 0.3);

  &:hover {
    background-color: #f5b82e;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(253, 196, 53, 0.4);
  }

  @media (max-width: 992px) {
    padding: 11px 24px;
    font-size: 15px;
  }

`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutDescription>
        I am a passionate professional with a solid background in technology and software development. Over the years, I've honed my skills in various areas, always striving to learn, innovate, and share knowledge. My approach is focused on continuous improvement, and I am always eager to go the extra mile to achieve the best results. Challenges are an opportunity for me to grow and push my boundaries, both personally and professionally.
      </AboutDescription>
      <ButtonGroup>
        <ButtonPrimary href="/CV/CV_David_Santiago.pdf" download>Resume</ButtonPrimary>
      </ButtonGroup>
    </AboutWrapper>
  );
}

export default About;