import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import Ucontext from './components/Context/StoreContext.jsx';

function Web() {
  return (
    <>
      <BrowserRouter>
        <Ucontext>
          <App/>
        </Ucontext>
      </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Web />);