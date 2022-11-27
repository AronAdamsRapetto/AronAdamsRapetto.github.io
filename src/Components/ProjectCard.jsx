import "./styles/projectCard.css";

function ProjectCard({ name, urlRepository }) {
  return(
    <a href={ urlRepository } target="_blank" rel="noreferrer">
      <div className="projeto">
        <h4>{ name }</h4>
         {/* <span>Projeto desenvolvido utilizando os conhecimentos de HTML e CSS básicos</span> */}
      </div>
    </a>
  );
}

export default ProjectCard;