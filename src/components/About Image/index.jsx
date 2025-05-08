import styled from "styled-components";
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

`;

const Image = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  object-position: center;
  transform: scale(1.05);

`;

const AboutImage = () => {
  return (
    <ContainerImage>
      <BackgroundSection>
        <Image src={davidImg} alt="David" />
      </BackgroundSection>
    </ContainerImage>
  );
}

export default AboutImage;