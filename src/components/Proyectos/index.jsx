import styled from "styled-components";
import projects from "../../data/projects";
const ProjectsSection = styled.section`
  text-align: center;
  padding: 80px 40px;

  @media (max-width: 992px) {
    padding: 60px 25px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const SectionTitle = styled.h2`
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

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
  max-width: 900px;
  margin: 0 auto 50px auto;
  gap: 50px;

  @media (max-width: 992px) {
    max-width: 700px;
    padding: 40px;
    gap: 35px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 35px 25px;
    gap: 30px;
    margin-bottom: 35px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: left;

  @media (max-width: 992px) {
    min-width: 200px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #25282b;

  @media (max-width: 992px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
  line-height: 1.6;

  @media (max-width: 992px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const ButtonView = styled.div`
  a {
    text-decoration: none;
    border: 2px solid #25282b;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 600;
    color: #25282b;
    transition: all 0.3s;
    display: inline-block;
    font-family: 'Raleway', sans-serif;

    &:hover {
      background: #25282b;
      color: #fff;
    }

    @media (max-width: 768px) {
      padding: 10px 20px;
    }
  }
`;

const ImageContent = styled.div`
  flex: 1;
  min-width: 300px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Proyectos = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      <Underline />
    
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <TextContent>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ButtonView>
              <a href={project.link}>View Project</a>
            </ButtonView>
          </TextContent>
    
          <ImageContent>
            <ImageStyled src={project.image} alt={project.title} />
          </ImageContent>
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
}

export default Proyectos;