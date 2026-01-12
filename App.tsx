import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import ContactPage from './pages/ContactPage';
import ServiceDetail from './pages/ServiceDetail';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-dark-900 min-h-screen text-gray-200 font-sans selection:bg-brand selection:text-black flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/equipo" element={<Team />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/servicios/:id" element={<ServiceDetail />} />
            {/* Fallback for unknown routes could go here */}
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;