import { useState } from 'react';
import axios from 'axios';
import './styles/contactForm.css';

function ContactForm() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    accessKey: '87d289cc-2da1-4529-88f1-18ae7c4e8256'
  });

  const [contactStatus, setContactStatus] = useState({
    isSended: false,
    message: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setContact({ ...contact, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: 'post',
        url: 'https://api.staticforms.xyz/submit',
        data: contact,
      });
      console.log(response);

      if (response.data.success) {
        setContactStatus({ 
        status: true,
        message: 'Mensagem enviada com sucesso!'
       });
      } else {
        setContactStatus({
          status: true,
          message: response.data.message,
        });
      }     
    } catch(error) {
      console.log(`Submit error: ${error}`)
      setContactStatus({
        status: true,
        message: 'Erro interno ao enviar mensagem, tente novamente mais tarde!',
      });
    }
  }

  return (
    <form
      action='https://api.staticforms.xyz/submit'
      method='post'
      onSubmit={ handleSubmit }
    >
      <input
        type='text'
        name='name'
        onChange={ handleChange }
        placeholder='Nome'
        required
      />
      <input
        type='email'
        name='email'
        onChange={ handleChange }
        placeholder='E-mail'
        required
      />
      <input
        type='text'
        name='subject'
        placeholder='Título'
        onChange={ handleChange }
      />
      <textarea
        name='message'
        onChange={ handleChange }
        placeholder='Mensagem'
        required
      />
      <button type='submit'>
        Enviar
      </button>
      {
        contactStatus.status && <span>{ contactStatus.message }</span>
      }
    </form>
  );
}

export default ContactForm;