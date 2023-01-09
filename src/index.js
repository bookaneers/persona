import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider and Store gives access to global files
  // toast container is the component that is used to notify if employee is add, updated or deleted
  // For global use, ToastContainer must be in root of application
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
      <Router />
    </React.StrictMode>
  </Provider>
);

