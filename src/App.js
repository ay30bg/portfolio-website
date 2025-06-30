import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
// import WalletWidget from './components/WalletWidget';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import './App.css'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="app">
        <Navbar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        <Routes>
          <Route
            path="/"
            element={
              <main className="content">
                <ProfileSection />
                <AboutSection />
                <SkillsSection />
              </main>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
           <Route path="/contacts" element={<ContactPage />} />
          {/* Add routes for /blogs and /contacts as needed */}
        </Routes>
        {/* <WalletWidget /> */}
      </div>
    </Router>
  );
}

export default App;