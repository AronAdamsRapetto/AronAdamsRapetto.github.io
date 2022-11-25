import Header from "../Components/Header";
import AboutContent from "../Components/AboutContent";
import { useState } from "react";

function About() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <Header setShowText={ setShowText } showText={ showText } />
      <AboutContent showText={ showText } />
    </div>
  )
}

export default About;