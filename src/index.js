import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {Hora}  from './components/Hora';
import { Componentllamada } from './components/Componentllamada';
import { Nombrehora } from './components/Nombre Hora';
import { Componentnumeros } from './components/Componentnumeros';
import { Componentlistanumeros } from './components/Componentlistanumeros';
import { Componentimpares } from './components/Componentimpares';
import { ComponentAlumno } from './components/ComponentAlumno';
import { ComponentSalario } from './components/ComponentSalario';
import { ComponentNumeroAleatorio } from './components/ComponentNumeroAleatorio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
      <Hora/>
      <Componentllamada/>
      <Nombrehora/>
      <Componentnumeros/>
      <Componentlistanumeros/>
      <Componentimpares/>
      <ComponentAlumno/>
      <ComponentSalario/>
      <ComponentNumeroAleatorio/>

  
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
