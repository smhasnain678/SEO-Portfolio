import './App.css';
import Navbar from './components/Navbar';
// import Hero from './components/HeroSection';
// import Footer from './components/AboutSection';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}

export default App;
