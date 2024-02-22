import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/header';
import Footer from './components/footer';
import Homepage from './pages/homepage/homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className="page__container">
      <Homepage />
    </div>
    <Footer />
  </React.StrictMode>
);
