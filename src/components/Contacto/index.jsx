import styled from "styled-components";


const ContactsSection = styled.section`
    text-align: center;
`;

const ContactTitle = styled.h2`
    font-family: 'Comfortaa', sans-serif;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 8px;
`;

const Underline = styled.div`
    width: 60px;
    height: 4px;
    background-color: #fdbb30;
    margin: 0 auto 40px auto;
    border-radius: 2px;
`;

const FormWrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: none;
  border-radius: 6px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 100px;
  margin-bottom: 16px;
  border: none;
  border-radius: 6px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  box-sizing: border-box;
  resize: none;
`;

const Button = styled.button`
  background-color: #ffc107;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  float: right;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0a800;
  }
`;

const Contacto = () => {
    return(
        <ContactsSection id="contacts">
            <ContactTitle>Contacts</ContactTitle>
            <Underline/>
            <FormWrapper>
                <form>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name"/>

                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" />

                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" />

                    <Button type="submit">Send</Button>
                </form>
            </FormWrapper>
        </ContactsSection>
    );
}

export default Contacto;