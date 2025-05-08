import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 80px 40px;
  text-align: center;

  @media (max-width: 992px) {
    padding: 60px 30px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
  }

`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 992px) {
    gap: 26px;
    margin-top: 25px;
  }

  @media (max-width: 768px) {
    gap: 24px;
    margin-top: 22px;
  }

`;

const IconLink = styled.a`
  color: #25282b;
  font-size: 28px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    color: #fdbb30;
    transform: translateY(-3px);
  }

  @media (max-width: 992px) {
    font-size: 24px;
    width: 36px;
    height: 36px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    width: 34px;
    height: 34px;
  }
`;

const Copyright = styled.div`
  margin-top: 40px;
  color: #828282;
  font-size: 14px;
  font-family: "Nunito", sans-serif;

  @media (max-width: 992px) {
    margin-top: 30px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
          <IconLink href="https://github.com" target="_blank" aria-label="GitHub">
            <FaGithub />
          </IconLink>
          <IconLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </IconLink>
          <IconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </IconLink>
        </SocialIcons>

        <Copyright>
          David Santiago © {new Date().getFullYear()}
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;