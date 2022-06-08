import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {

  return (
    <section>
    <Router>
      <div>
        <Nav></Nav>
        <main>
          <Routes>
            <Route
              path='/portfolio-2.0'
              element={<Header />}
            />
            <Route 
              path="/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/contact-me"
              element={<ContactForm />}
            />
          </Routes>
        </main> 
        <Footer></Footer>
      </div>
    </Router>
    </section>
  );
}

export default App;
