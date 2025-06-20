import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './container/App'
import './styles/global.css'
import './styles/globalTypography.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializar AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
