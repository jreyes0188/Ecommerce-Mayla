import './App.css';
import React from 'react';

// Componentes //
import Info from "./components/Info/Info"
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import CartShop from "./components/CartShop/CartShop"

//React Router Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pagues
import Inicio from "./pages/Inicio/Inicio"
import Catalogo from "./pages/Catalogo/Catalogo"
import Consultas from './pages/Consultas/Consultas';
import ProductDetail from './pages/ProductDetail/ProductDetail';

import {Context} from "./Context/Context"

const App = () => {
  return (
    <Router>
      <Context>
      <div className="App">
        <Info />
        <Header title="Arte con Resina" />
        <NavBar />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/catalogo/:product' element={<Catalogo />} />
            <Route path='/consultas' element={<Consultas />} />
            <Route path='/cartshop' element={<CartShop />} />
            <Route path='/detail/:id' element={<ProductDetail />} />
          </Routes>
      </div>
      </Context>
    </Router>
  );
}

export default App;
