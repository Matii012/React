//Module
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//styles
import './index.css';
//Components
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer';
//Core
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>



    <BrowserRouter>

    <NavBar></NavBar>
    
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/Productos' element={<ItemListContainer />} />
    <Route exact path='/Producto/:productoName/:productoId' element={<ItemDetailContainer />} />
    <Route exact path='/Contáctenos' element={<AboutUs />} />
    </Routes>

    <Footer></Footer>
    
    </BrowserRouter>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
