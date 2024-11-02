import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Section from './components/Section.jsx';
import Section2 from './components/Section2.jsx';
import Management from './components/management.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactHeader from './Contact/ContactHeader.jsx';
import ContactSection from './Contact/ContactSection.jsx';
import ContactMap from './Contact/ContactMap.jsx';
import Development from './Development/Development.jsx';
import CarouselSection from './components/Carousel.jsx';
import ServicePage from './services/Service.jsx';
import FourCards from './AboutUs/Card.jsx';
import AboutHeader from './AboutUs/AboutHeader.jsx';
import MainOne from './AboutUs/MainOne.jsx';
import Video from './AboutUs/Video.jsx';
import ThreeCards from './AboutUs/SendCard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <CarouselSection />
            <Section />
            <Section2 />
            <Management />
          </>
        } />
        <Route path='/contact' element={
          <>
            <ContactHeader />
            <ContactSection />
            <ContactMap />
          </>
        } />
        <Route path='/development' element={
          <>
            <Development />
          </>
        } />
        <Route path='/services' element={
          <>
            <ServicePage />
          </>
        } />
        <Route path='/about' element={
          <>
            <AboutHeader />
            <MainOne />
            <Video />
            <FourCards />
            <ThreeCards />
          </>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
