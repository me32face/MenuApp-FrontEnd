import React from 'react';
import Navbar from './components/Navbar';
import MenuHeader from './components/MenuHeader';
import MenuItemsGrid from './components/MenuItemsGrid';
import ContactSection from './components/ContactSection';
import BaseFooter from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <MenuHeader />
      <MenuItemsGrid />
      <ContactSection />
      <BaseFooter/>
    </>
  );
}

export default App;
