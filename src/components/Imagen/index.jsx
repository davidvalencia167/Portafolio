import styled from "styled-components";
import davidImg from "../../assets/david.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;


const Imagen = () => {

    return(
        <Container>
          <BackgroundSection>
          <DavidImage src={davidImg} alt="David" />
            <Content/>
          </BackgroundSection>
        </Container>
    );

}

export default Imagen;