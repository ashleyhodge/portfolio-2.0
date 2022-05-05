import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
}

export default App;
