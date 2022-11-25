import Header from "../Components/Header";
import AboutContent from "../Components/AboutContent";
import { useState } from "react";
import Footer from "../Components/Footer";

function About() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <Header setShowText={ setShowText } showText={ showText } />
      <AboutContent showText={ showText } />
      <Footer />
    </div>
  )
}

export default About;