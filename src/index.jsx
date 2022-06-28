import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AgendaContexto } from './contextos/agendaContexto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AgendaContexto>

    <App />
      </AgendaContexto>
    </BrowserRouter>
  </React.StrictMode>
);


