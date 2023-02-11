import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import { NotesContextProvider } from './Context/APIContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NotesContextProvider>
      <App />
    </NotesContextProvider>
  </Router>
);



