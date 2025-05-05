
import styled from "styled-components";

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 120px;
    height: 100vh;
    box-sizing: border-box;
    position: absolute;
`;

const AboutTitle = styled.h1`
  color: #25282b;
  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`;

const AboutDescription = styled.p`
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


const About = () => {
    return (
            <AboutWrapper>
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