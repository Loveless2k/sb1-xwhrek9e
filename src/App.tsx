import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/experience/Experience';
import SocialLinks from './components/SocialLinks';
import ChatbotTeaser from './components/ChatbotTeaser';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <SocialLinks />
        <ChatbotTeaser />
      </main>
      <Footer />
    </div>
  );
}

export default App;