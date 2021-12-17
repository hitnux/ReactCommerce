import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HeaderMenu from './app/components/Layout/Header';
import Home from './app/views/Home';
import FooterArea from './app/components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <HeaderMenu></HeaderMenu>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterArea></FooterArea>
    </div>
  )
}

export default App
