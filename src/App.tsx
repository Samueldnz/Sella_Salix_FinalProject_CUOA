import './App.css'
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { Technology } from './components/sections/Technology';
import { Process } from './components/sections/Process';
import { CTA } from './components/sections/CTA';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Technology />
        <Process />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App
