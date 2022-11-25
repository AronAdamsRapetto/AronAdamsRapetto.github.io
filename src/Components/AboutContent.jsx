import './styles/aboutContent.css';
import profileImage from '../img/profileImage.jpeg';

function AboutContent({ showText }) {

  return (
    <main>
      <section id="container-sobre-mim" className="sobre-mim">  
        <img className="foto-de-perfil" src={ profileImage }
          alt="Foto de Aron Adams Rapetto" width="150px" />
  
        <div className={showText ? "apareceTexto" : "texto-apresentacao"}>
          <p>
            Oii, muito prazer e bem vindo(a) ao meu
            <strong>portifólio profissional!!</strong> </p>
            <p>
            Meu nome é Aron, tenho 24 anos, sou <em>Brasileiro</em>, nascido e residente de
            <strong> Porto Alegre/RS</strong>, moro com minha esposa e minhas duas filhas do
            coração. Atualmente sou uma pessoa estudante da Trybe me preparando para
            uma futura carreira como Dev na área de Desenvolvimento Web. Gosto muito
            de música e tenho como principal hobby tocar violão.
            <br />
            Meu sonho é viajar o mundo e conhecer as mais diversas culturas e
            costumes, vislumbrar paisagens inimagináveis e enriquecer minha vida com
            experiências únicas.
          </p>
        </div>
      </section>      
    </main>
  );
}

export default AboutContent;