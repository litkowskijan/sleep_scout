import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './app';
import SearchPage from './searchpage';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};
createRoot(document.getElementById('root')).render(<Root />);
