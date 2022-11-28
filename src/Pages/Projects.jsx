import Footer from "../Components/Footer"
import Header from "../Components/Header"
import ProjectCard from "../Components/ProjectCard";
import projectList from '../data/projectList';
import '../App.css';

function Projects() {
  return (
    <div className="page-container">
      <Header />
      <main>
        <section className="projects-container">
          {
            projectList.map(({ name, urlRepository }) => (
            <ProjectCard
              name={ name }
              urlRepository={ urlRepository }
            />
          ))
          }
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Projects