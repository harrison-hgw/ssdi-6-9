import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Qualification from './components/Qualification';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Challenge />
        <Solution />
        <HowItWorks />
        <Qualification />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
