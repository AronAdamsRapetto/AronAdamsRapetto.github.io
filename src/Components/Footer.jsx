import './styles/footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer({ isFixed }) {
  return (
    <footer style={{ position: isFixed ? 'fixed' : '' }}>
      <p>Todos os direitos reservados</p>
      <p>Desenvolvido por Aron Adams Rapetto</p>
      <div className="container-links">
        <a href="https://linkedin.com/in/aron-adams-rapetto" target="_Blank" rel="noreferrer"><FaLinkedin /></a>
        <br />
        <a href="https://github.com/AronAdamsRapetto" target="_Blank" rel="noreferrer"><FaGithub /></a>      
      </div>      
    </footer>
  );
}

export default Footer;