import { Link, useHistory } from 'react-router-dom';
import './styles/header.css';

function Header({ setShowText, showText }) {
  const history = useHistory();

  const handleClick = () => {
    if(history.location.pathname === '/') return setShowText(!showText);
    history.push('/');
  }

  return (
    <header>
      <h1>Aron Adams Rapetto</h1>
        <nav>
          <ul>
            <li><Link onClick={ handleClick } to='/'>SOBRE MIM</Link></li>
            <li><Link to="/projects">PROJETOS</Link></li>
            <li><Link to="/contact">CONTATO</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;