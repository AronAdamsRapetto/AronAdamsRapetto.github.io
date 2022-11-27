import Footer from "../Components/Footer"
import Header from "../Components/Header"
import ProjectCard from "../Components/ProjectCard";
import projectList from '../data/projectList';

function Projects() {
  return (
    <div>
      <Header />
      <main>
        <section className="container-projetos">
          {
            projectList.map(({ name, urlRepository }) => (
            <ProjectCard
              name={ name }
              urlRepository={ urlRepository }
            />
          ))
          }
        </section>
        {/* <section className="back-end-container">

        </section> */}
      </main>
      <Footer isFixed={ true }/>
    </div>
  )
}

export default Projects