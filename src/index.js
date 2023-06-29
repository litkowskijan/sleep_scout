import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<Root />, document.getElementById('root'));