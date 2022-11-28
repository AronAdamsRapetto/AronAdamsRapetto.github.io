import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import '../App.css'

function Contact() {
  return (
    <div className="page-container">
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default Contact;