import './styles/aboutContent.css';
import profileImage from '../img/profileImage.jpeg';

function AboutContent({ showText }) {
  return (
    <main>
      <section className="about-me-container">  
        <img className="profile-image" src={ profileImage }
          alt="Foto de Aron Adams Rapetto" width="150px" />
  
        <div className='presentation-container'>
          <p className='presentation'>
            Oii, muito prazer e bem vindo(a) ao meu
            <strong> portifólio profissional!!</strong>
          </p>
          <p className={showText ? "about-text" : 'hidden-about-text'}>
            Meu nome é Aron, tenho 24 anos, sou <em>Brasileiro</em>, nascido e residente de
            <strong> Porto Alegre/RS</strong>, Aqui você encontrará alguns projetos desenvolvidos de forma
            individual por mim ou colaborando em um grupo, encontrará também certo conhecimento em CSS utilizado para
            desenvolver esta aplicação, caso deseje entrar em contato, no rodapé da página há links para o
            Github e LinkedIn, assim como uma tela de contato onde poderá enviar-me um email diretamente desde
            portfólio. 
            <br />
            Obrigado pela visita, qualquer dúvida não hesite em entrar em contato. Forte Abraço!
          </p>
        </div>
      </section>      
    </main>
  );
}

export default AboutContent;

// Atualmente sou uma pessoa estudante da Trybe me preparando para
// uma futura carreira como Dev na área de Desenvolvimento Web. Gosto muito
// de música e tenho como principal hobby tocar violão.