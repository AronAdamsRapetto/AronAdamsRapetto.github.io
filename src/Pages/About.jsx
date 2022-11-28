import Header from "../Components/Header";
import AboutContent from "../Components/AboutContent";
import { useState } from "react";
import Footer from "../Components/Footer";
import '../App.css';

function About() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="page-container">
      <Header setShowText={ setShowText } showText={ showText } />
      <main>
        <AboutContent showText={ showText } />
      </main>
      <Footer />
    </div>
  )
}

export default About;