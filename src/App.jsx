import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Imagen from "./components/Imagen";
import Cabecera from "./components/Cabecera";
import Presentacion from "./components/Presentacion";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import AboutImage from "./components/About Image";
import Contacto from "./components/Contacto";

const FondoGradiente = styled.div`
    background: #F9FAFF
    width: 100%;
    min-height: 100vh;
`;


function Home() {
  return(
    <FondoGradiente>
      <GlobalStyles/> 
      <Cabecera/>
      <Presentacion/>
      <Imagen/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </FondoGradiente>
  );
}

function AboutPage() {
  return(
    <FondoGradiente>
      <GlobalStyles/> 
      <Cabecera/>
      <About/>
      <AboutImage/>
    </FondoGradiente>
  );
}

function App() {
  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      
      </BrowserRouter>
  );
}

export default App;
