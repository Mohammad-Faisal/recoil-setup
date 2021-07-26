import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './view/App';
import {RecoilRoot} from "recoil";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <RecoilRoot>
          <App />
      </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
