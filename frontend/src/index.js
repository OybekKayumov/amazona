import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider} from 'react-helmet-async';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { StoreProvider } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <PayPalScriptProvider>
          <App />
        </PayPalScriptProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);


