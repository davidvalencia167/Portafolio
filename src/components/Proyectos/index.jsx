import styled from "styled-components";
import projects from "../../data/projects";
 
const ProjectsSection = styled.section`
  text-align: center;
`;

const SectionTitle = styled.h2`
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

const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: white;
  padding: 60px;
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto 40px auto;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
`;

const ButtonView = styled.div`
  a {
    text-decoration: none;
    border: 2px solid #000;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 600;
    color: #000;
    transition: all 0.3s;

    &:hover {
      background: #000;
      color: #fff;
    }
  }
`;

const ImageContent = styled.div`
  flex: 1;
  min-width: 300px;
  border-radius: 24px;
  overflow: hidden;
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 24px;
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