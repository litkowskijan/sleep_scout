import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './searchpage';
import LandingPage from './landingpage';
import BlogPage from './blogpage';

const Root = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path='/blogpage' element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

createRoot(document.getElementById('root')).render(<Root />);