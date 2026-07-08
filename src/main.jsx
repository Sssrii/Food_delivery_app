// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';

// // ✅ Import your StoreContextProvider
// import StoreContextProvider from './context/StoreContext'; // make sure path is correct

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <StoreContextProvider>
//         <App />
//       </StoreContextProvider>
//     </BrowserRouter>
//   </StrictMode>
// );


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // ✅ use HashRouter
import StoreContextProvider from './context/StoreContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </HashRouter>
  </StrictMode>
);



