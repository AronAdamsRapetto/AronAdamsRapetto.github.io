import { Link } from 'react-router-dom';
import './styles/header.css';

function Header() {
 return (
  <header>
    <h1 class="nome">Aron Adams Rapetto</h1>
      <nav>
        <ul>
          <li id="sobre-mim"><Link to="/">SOBRE MIM</Link></li>
          <li><Link to="/projects">PROJETOS</Link></li>
          <li><Link to="/contact">CONTATO</Link></li>
        </ul>
      </nav>
  </header>
 );
}

export default Header;