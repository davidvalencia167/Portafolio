import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
    padding: 40px 20px;
    text-align: center;
`; 

const FooterText = styled.p`
    color: #828282;
    font-size: 16px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const IconLink = styled.a`
  color: #000;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #fdbb30;
  }
`;

const Footer = () => {
    return(
    <FooterContainer>
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
        <FooterText>David Santiago © 2025</FooterText>
    </FooterContainer>
    );
}

export default Footer;