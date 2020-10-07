import React from 'react';
import './App.css';

import Footer from './Pages/Footer';
import Header from './Pages/Header';
import MenuKontak from './Pages/MenuKontak';
import MenuMakanan from './Pages/MenuMakanan';
import MenuTentangKami from './Pages/MenuTentangKami';


function App() {
  return (
    <div>
      <Header />
      <MenuMakanan />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
