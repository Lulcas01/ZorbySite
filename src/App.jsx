import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Metas from './components/Metas'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
   
      <Metas />    
      <Footer />
    </div>
  );
}

export default App;