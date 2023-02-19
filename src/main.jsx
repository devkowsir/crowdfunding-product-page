import React from 'react';
import ReactDOM from 'react-dom/client';
import PledgeModalProvider from './store/PledgeModalProvider';
import PledgeProvider from './store/Pledge';
import BackerProvider from './store/Backer';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PledgeProvider>
      <PledgeModalProvider>
        <BackerProvider>
          <App />
        </BackerProvider>
      </PledgeModalProvider>
    </PledgeProvider>
  </React.StrictMode>
);
