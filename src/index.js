import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import Header from './components/header';
import Body from './components/body';
import Coupons from './components/coupons';
import Programs from './components/programs';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<div><App><Header /><Body/></App></div>}/>
        <Route path="/admin/calendar" element={<div><App><Header /><Body/></App></div>}/>
        <Route path="/admin/programs" element={<div><App><Header /><Body><Programs /></Body></App></div>}/>
        <Route path="/admin/storefront" element={<div><App><Header /><Body/></App></div>}/>
        <Route path="/admin/coupons" element={<div><App><Header /><Body><Coupons/></Body></App></div>}/>
        <Route path="/admin/clients" element={<div><App><Header /><Body/></App></div>}/>
        <Route path="/admin/reports" element={<div><App><Header /><Body/></App></div>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
