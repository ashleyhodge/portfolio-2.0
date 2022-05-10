import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Header></Header>
        <Portfolio></Portfolio>
        <About></About>
        <Footer></Footer>
      </main> 
    </div>
  );
}

export default App;
