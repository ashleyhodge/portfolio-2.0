import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
