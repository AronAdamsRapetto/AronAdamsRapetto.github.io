import "./styles/projectCard.css";
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ name, urlRepository }) {
  return(
    <a href={ urlRepository } target="_blank" rel="noreferrer">
      <div className="project-card">
        <div className="project-card-inner">
          <div className="project-card-front">
            <h4>{ name }</h4>
          </div>
          <div className="project-card-back">
            <h3>Acessar Repositório</h3>
            <i>
              <FaGithub />
            </i>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;