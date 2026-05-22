
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

export default function App() {
  return(
    <>
     <Navbar/>
     <main>
       <Hero />
       <Features />
     </main>
    </>
  );
}