import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Home';
import './App.css';
import { Header } from './components/Header';

const App = () => {
  return (
    <>
    <Header />
    <Homepage />
  {/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />}  />
    <Route path="/timeline" element={<Timeline />}  />
    <Route path="/overview" element={<Overview />}  />
    <Route path="/faqs" element={<Faqs />}  />
    <Route path="/register" element={<Register />}  />
  </Routes>
  </BrowserRouter> */}
    </>
  );
}
export default App;
