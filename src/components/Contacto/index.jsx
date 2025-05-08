import styled from "styled-components";

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

`;

const FormGroup = styled.div`
  margin-bottom: 24px;
  text-align: left;

  @media (max-width: 992px) {
    margin-bottom: 20px;
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
`;

const Contacto = () => {
  return (
    <ContactsSection id="contacts">
      <ContactTitle>Contacts</ContactTitle>
      <Underline />
      <FormWrapper>
        <form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required />
          </FormGroup>
          
          <SubmitButton type="submit">Send</SubmitButton>
        </form>
      </FormWrapper>
    </ContactsSection>
  );
}

export default Contacto;