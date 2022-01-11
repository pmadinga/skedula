import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from 'react-router-dom';

// app routes
import AppRoutes from './AppRoutes'

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteHeader from './views/components/SiteHeader';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteHeader/>
      <AppRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
