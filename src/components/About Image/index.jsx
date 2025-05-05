import styled from "styled-components";
import davidImg from "../../assets/david.png";

const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
`;

const BackgroundSection = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #FDC435;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const AboutImage = () => {
    return(
       <ContainerImage>
            <BackgroundSection>
                <Image src={davidImg} alt="David" />
            </BackgroundSection>
       </ContainerImage>
    );
}

export default AboutImage;