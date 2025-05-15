import styled from "styled-components";
import { useState, useEffect } from "react";

const ContactsSection = styled.section`
  text-align: center;
  padding: 100px 40px;
  position: relative;

  @media (max-width: 992px) {
    padding: 80px 30px;
  }

  @media (max-width: 768px) {
    padding: 70px 20px;
  }
  
  @media (max-width: 480px) {
    padding: 60px 16px;
  }
  
  @media (max-width: 360px) {
    padding: 50px 12px;
  }
`;

const ContactTitle = styled.h2`
  font-family: 'Comfortaa', sans-serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #25282b;

  @media (max-width: 992px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
  
  @media (max-width: 360px) {
    font-size: 22px;
  }
`;

const Underline = styled.div`
  width: 60px;
  height: 4px;
  background-color: #fdbb30;
  margin: 0 auto 50px auto;
  border-radius: 2px;

  @media (max-width: 992px) {
    margin-bottom: 45px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
    width: 50px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
    width: 40px;
    height: 3px;
  }
  
  @media (max-width: 360px) {
    margin-bottom: 25px;
    width: 35px;
  }
`;

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 60px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);

  @media (max-width: 992px) {
    padding: 50px;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    padding: 25px;
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 360px) {
    padding: 16px;
    border-radius: 10px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
  text-align: left;

  @media (max-width: 992px) {
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
  
  @media (max-width: 360px) {
    margin-bottom: 14px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  color: #25282b;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  color: #25282b;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #fdbb30;
    box-shadow: 0 0 0 3px rgba(253, 187, 48, 0.2);
  }

  @media (max-width: 992px) {
    padding: 12px 14px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
  }
  
  @media (max-width: 480px) {
    padding: 9px 10px;
    font-size: 13px;
    border-radius: 6px;
  }
  
  @media (max-width: 360px) {
    padding: 8px;
    font-size: 12px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  color: #25282b;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #fdbb30;
    box-shadow: 0 0 0 3px rgba(253, 187, 48, 0.2);
  }

  @media (max-width: 992px) {
    height: 130px;
    padding: 12px 14px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    height: 120px;
    padding: 10px 12px;
  }
  
  @media (max-width: 480px) {
    height: 100px;
    padding: 9px 10px;
    font-size: 13px;
    border-radius: 6px;
  }
  
  @media (max-width: 360px) {
    height: 90px;
    padding: 8px;
    font-size: 12px;
  }
`;

const SubmitButton = styled.button`
  background-color: #fdbb30;
  color: #25282b;
  border: none;
  padding: 14px 32px;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  float: right;
  box-shadow: 0 4px 12px rgba(253, 187, 48, 0.3);

  &:hover {
    background-color: #f5b21c;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(253, 187, 48, 0.4);
  }

  @media (max-width: 992px) {
    padding: 12px 28px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    float: none;
    padding: 12px 24px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 0;
    font-size: 14px;
    border-radius: 40px;
    box-shadow: 0 3px 10px rgba(253, 187, 48, 0.3);
    
    &:active {
      transform: translateY(0);
      background-color: #f5b21c;
    }
  }
  
  @media (max-width: 360px) {
    padding: 9px 0;
    font-size: 13px;
    border-radius: 30px;
  }
`;

const Contacto = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // Verificación inicial
    checkMobile();
    
    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkMobile);
    
    // Limpiar listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("Mensaje enviado con éxito!");
  };
  
  return (
    <ContactsSection id="contacts">
      <ContactTitle>Contacts</ContactTitle>
      <Underline />
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder={isMobile ? "Tu nombre" : ""}
              autoComplete="name"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder={isMobile ? "ejemplo@correo.com" : ""}
              autoComplete="email"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              name="message" 
              required 
              placeholder={isMobile ? "Escribe tu mensaje aquí..." : ""}
            />
          </FormGroup>
          
          <SubmitButton type="submit">Send</SubmitButton>
        </form>
      </FormWrapper>
    </ContactsSection>
  );
}

export default Contacto;